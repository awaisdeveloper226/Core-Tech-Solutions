import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CoreTech Solutions",
  description: "CoreTech Solutions is a service-based company expertising in web development, app development and data analysis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar/>
        {children}
        <Footer />

        {/* Floating AI chat widget (bottom-right), on every page.
            lazyOnload = loads after the page is interactive, so it never
            competes with real page content for load time. */}
        <Script
          src="https://cdn.zanderio.ai/widget/loader.js"
          data-id="wdg_yHf5WfCcN6CtUu8iwEJ8kajG"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
