import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'FunnelMaster – Complete Funnel Visibility',
  description: 'Track every step from YouTube views to sales. Get actionable insights and AI-powered recommendations to grow your revenue with FunnelMaster.',
  openGraph: {
    title: 'FunnelMaster – Complete Funnel Visibility',
    description: 'Track every step from YouTube views to sales. Get actionable insights and AI-powered recommendations to grow your revenue with FunnelMaster.',
    url: 'https://funnelmaster.ai',
    siteName: 'FunnelMaster',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FunnelMaster Dashboard Preview',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
