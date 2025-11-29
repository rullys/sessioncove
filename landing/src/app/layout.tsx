import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";
import Script from "next/script";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const headingFont = Inter({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sessioncove.com"),
  title:
    "Session Cove – WhatsApp-first scheduling for solo trainers, tutors, and coaches",
  description:
    "Session Cove helps solo trainers, tutors, and coaches turn WhatsApp chats into clean, reliable sessions with a simple booking link and manual WhatsApp confirmations and reminders.",
  openGraph: {
    title:
      "Session Cove – WhatsApp-first scheduling for solo trainers, tutors, and coaches",
    description:
      "Turn WhatsApp chats into clean, reliable sessions. Share one booking link, let clients book themselves, and confirm or remind them in WhatsApp with one tap.",
    url: "https://sessioncove.com",
    siteName: "Session Cove",
    images: [
      {
        url: "/sessioncove-og.png",
        width: 1200,
        height: 630,
        alt: "Session Cove – WhatsApp-first scheduling for solo trainers, tutors, and coaches",
      },
    ],
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Session Cove – WhatsApp-first scheduling for solo trainers, tutors, and coaches",
    description:
      "Turn WhatsApp chats into clean, reliable sessions. Share one booking link, let clients book themselves, and confirm or remind them in WhatsApp with one tap.",
    images: ["/sessioncove-og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body className="font-sans">
        {children}
        <Script
          src="https://tally.so/widgets/embed.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
