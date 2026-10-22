"use server";

import { headers } from "next/headers";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";
import { Resend } from "resend";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  /** Echoed back on error so the form keeps what the visitor typed. */
  values: { name: string; email: string; message: string };
};

const EMPTY = { name: "", email: "", message: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = "15 m";

function field(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function clientIp(requestHeaders: Headers) {
  return (
    requestHeaders.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    requestHeaders.get("x-real-ip") ??
    "unknown"
  );
}

function retryAfter(reset: number) {
  return Math.max(1, Math.ceil((reset - Date.now()) / 60_000));
}

async function checkRateLimit(ip: string, email: string) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    console.error("[contact] Upstash rate limiter is not configured");
    return { configured: false as const };
  }

  const redis = new Redis({ url, token });
  const ipLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(RATE_LIMIT_MAX, RATE_LIMIT_WINDOW),
    prefix: "contact:ip",
  });
  const emailLimiter = new Ratelimit({
    redis,
    limiter: Ratelimit.slidingWindow(RATE_LIMIT_MAX, RATE_LIMIT_WINDOW),
    prefix: "contact:email",
  });

  const [ipResult, emailResult] = await Promise.all([
    ipLimiter.limit(ip),
    emailLimiter.limit(email.toLowerCase()),
  ]);
  const blockedResult = [ipResult, emailResult].find((result) => !result.success);

  return blockedResult
    ? { configured: true as const, allowed: false as const, reset: blockedResult.reset }
    : { configured: true as const, allowed: true as const };
}

export async function sendMessage(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const values = {
    name: field(formData, "name"),
    email: field(formData, "email"),
    message: field(formData, "message"),
  };

  // Honeypot: real visitors never see or fill this field. Pretend success for bots.
  if (field(formData, "website")) {
    return { status: "success", message: "Message sent.", values: EMPTY };
  }

  if (!values.name || !values.email || !values.message) {
    return {
      status: "error",
      message: "Fill in your name, email and message.",
      values,
    };
  }
  if (!EMAIL_RE.test(values.email)) {
    return {
      status: "error",
      message: "That email address doesn't look right. Check it and try again.",
      values,
    };
  }
  if (
    values.name.length > 100 ||
    values.email.length > 200 ||
    values.message.length > 5000
  ) {
    return {
      status: "error",
      message: "Your message is too long. Shorten it and try again.",
      values,
    };
  }

  let rateLimit;
  try {
    rateLimit = await checkRateLimit(clientIp(await headers()), values.email);
  } catch (err) {
    console.error("[contact] rate limiter failed:", err);
    return {
      status: "error",
      message: "The form is temporarily unavailable. Please try again later.",
      values,
    };
  }

  if (!rateLimit.configured) {
    return {
      status: "error",
      message: "The form is temporarily unavailable. Please try again later.",
      values,
    };
  }
  if (!rateLimit.allowed) {
    const minutes = retryAfter(rateLimit.reset);
    return {
      status: "error",
      message: `Too many messages. Please try again in about ${minutes} minute${minutes === 1 ? "" : "s"}.`,
      values,
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY is not set");
    return {
      status: "error",
      message:
        "The form isn't set up yet. Email me directly at the address on this page.",
      values,
    };
  }

  const to = process.env.CONTACT_TO_EMAIL ?? "shajinahsans@gmail.com";
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";
  const safeName = values.name.replace(/[\r\n]+/g, " ");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: values.email,
      subject: `Portfolio message from ${safeName}`,
      text: `From: ${safeName} <${values.email}>\n\n${values.message}`,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return {
        status: "error",
        message:
          "Your message couldn't be sent. Try again, or email me directly.",
        values,
      };
    }
  } catch (err) {
    console.error("[contact] send failed:", err);
    return {
      status: "error",
      message:
        "Your message couldn't be sent. Try again, or email me directly.",
      values,
    };
  }

  return { status: "success", message: "Message sent.", values: EMPTY };
}
