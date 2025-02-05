import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import NavBar from "./components/Navbar";
import "./globals.css";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Golden Media NG | Top Marketing Agency in Nigeria",
  description:
    "Golden Media NG is a leading marketing agency in Nigeria, specializing in brand advertisement, radio, TV, and Signage campaigns. Grow your brand with us!",
  keywords: ["Signage", "advertising", "market", "brand", "radio", "TV", "Campaigns", "Nigeria"],
  authors: [{ name: "Golden Media NG" }],
  robots: "index, follow",
  themeColor: "#ffcc00",
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://www.goldenmedia.com.ng",
    siteName: "Golden Media NG",
    title: "Golden Media NG | Top Marketing Agency in Nigeria",
    description:
      "Golden Media NG is a leading marketing agency in Nigeria, specializing in brand advertisement, radio, TV, and Signage campaigns. Grow your brand with us!",
    images: [
      {
        url: "https://www.goldenmedia.com.ng/blackLogo.png",
        width: 1200,
        height: 630,
        alt: "Golden Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@youragencyhandle",
    creator: "@youragencyhandle",
    title: "Golden Media NG | Top Marketing Agency in Nigeria",
    description:
      "Golden Media NG is a leading marketing agency in Nigeria, specializing in brand advertisement, radio, TV, and Signage campaigns. Grow your brand with us!",
    images: ["https://www.goldenmedia.com.ng/blackLogo.png"],
  },
  icons: {
    icon: "/export3.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  metadataBase: new URL("https://www.goldenmedia.com.ng"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><NavBar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
