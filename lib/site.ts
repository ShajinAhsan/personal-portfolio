const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

function normalizeSiteUrl(value: string) {
  const url = new URL(value);

  if (url.protocol !== "https:" && url.protocol !== "http:") {
    throw new Error(
      `NEXT_PUBLIC_SITE_URL must use http or https, received "${value}"`,
    );
  }

  return url.toString().replace(/\/+$/, "");
}

export const siteUrl = configuredSiteUrl
  ? normalizeSiteUrl(configuredSiteUrl)
  : "https://shajin.me";
