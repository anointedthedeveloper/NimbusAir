import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import type { ReactNode } from "react";
import "./globals.css";

const heading = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "NimbusAir | Premium Flight Booking UI",
    template: "%s | NimbusAir",
  },
  description:
    "NimbusAir is a flight booking platform concept built to showcase modern UI, search, booking, admin, and status experiences with a premium airline aesthetic.",
  keywords: [
    "NimbusAir",
    "airline booking",
    "flight booking",
    "flight status",
    "boarding pass",
    "Next.js airline UI",
    "anointed",
    "anointedthedeveloper",
    "anointed agunloye",
    "agunloye",
    "agunloyea",
    "anointed the developer",
    "anobyte",
    "anobyte website",
    "flight themes",
    "aviation design",
    "premium travel UI",
    "airline dashboard",
    "admin panel",
    "travel booking app",
  ],
  authors: [{ name: "anointedthedeveloper", url: "https://github.com/anointedthedeveloper" }],
  creator: "anointedthedeveloper",
  publisher: "anobyte",
  verification: {
    google: "aKnYWomdVfhxFP0_AX4H1COpM7C0o7GM-9Ad7FfI-nE",
  },
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: "NimbusAir | Premium Flight Booking UI",
    description:
      "A polished airline booking concept with flight search, booking, dashboard, admin, and live status pages.",
    siteName: "NimbusAir",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "NimbusAir preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NimbusAir | Premium Flight Booking UI",
    description:
      "A polished airline booking concept with flight search, booking, dashboard, admin, and live status pages.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable}`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
