const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteUrl = (
  configuredSiteUrl && configuredSiteUrl.trim()
    ? configuredSiteUrl
    : "https://shajin.me"
).replace(/\/+$/, "");
