import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeInitializer from "@/components/ThemeInitializer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const APP_NAME = "Temuin";
export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: APP_NAME,
  description: "Smart E-commerce App for Quick Search",
  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#FF5733",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* ThemeInitializer runs client-side and toggles `.dark` on <html> during night hours */}
        <ThemeInitializer />
        {children}
      </body>
    </html>
  );
}
