import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "next-themes";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteDescription =
  "Portfolio of Shajin Ahsan Shuvo, a CSE student at CUET working across MERN web development, Linux systems, and hardware.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Shajin Ahsan Shuvo",
    template: "%s | Shajin Ahsan Shuvo",
  },
  description: siteDescription,
  authors: [{ name: "Shajin Ahsan Shuvo", url: siteUrl }],
  creator: "Shajin Ahsan Shuvo",
  openGraph: {
    title: "Shajin Ahsan Shuvo",
    siteName: "shajin.me",
    description:
      "MERN web dev, Linux systems and hands-on hardware. Portfolio of Shajin Ahsan Shuvo.",
    type: "website",
    url: siteUrl,
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Shajin Ahsan Shuvo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shajin Ahsan Shuvo — CSE Student & Builder",
    description:
      "MERN web dev, Linux systems and hands-on hardware. Portfolio of Shajin Ahsan Shuvo.",
    creator: "@shajinahsan",
    site: "@shajinahsan",
    images: ["/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FCFCF9" },
    { media: "(prefers-color-scheme: dark)", color: "#10100F" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body className="theme-transition antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shajin Ahsan Shuvo",
              url: siteUrl,
              image: `${siteUrl}/portrait.webp`,
              description: siteDescription,
              jobTitle: "Computer Science and Engineering Student",
              affiliation: {
                "@type": "CollegeOrUniversity",
                name: "Chittagong University of Engineering & Technology",
              },
              sameAs: [
                "https://github.com/shajinahsan",
                "https://www.linkedin.com/in/shajinahsan",
                "https://twitter.com/shajinahsan",
                "https://www.facebook.com/shajinahsans",
              ],
            }).replace(/</g, "\\u003c"),
          }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        {process.env.VERCEL === "1" && (
          <>
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
