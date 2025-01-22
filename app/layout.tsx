import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Hind_Siliguri } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali"],
});

export const metadata: Metadata = {
  title:
    "BD Metro AI - Comprehensive Guide to Dhaka Metro Services and Updates",
  description:
    "Explore the latest information, services, and updates about the Dhaka Metro, including routes, MRT/Rapid Pass, schedules, and travel tips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${hindSiliguri.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
