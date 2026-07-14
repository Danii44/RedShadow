import { ToastContainer } from "react-toastify";
import { Inter, Jost } from "next/font/google";
import type { Metadata } from "next";
import "swiper/css/bundle";
import "./globals.scss";

// Inter font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: false
});

// Jost font
const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
  preload: false
});

export const metadata: Metadata = {
  title: "Red Shadow Designs",
  description: "Red Shadow Designs is a dark-themed digital studio that builds bold websites, brands and digital experiences.",
  metadataBase: new URL("https://redshadowdesigns.com"),
  icons: {
    icon: "/assets/img/logo/favicon.png",
    shortcut: "/assets/img/logo/favicon.png",
    apple: "/assets/img/logo/favicon.png",
  },
  openGraph: {
    title: "Red Shadow Designs",
    description: "Red Shadow Designs is a dark-themed digital studio that builds bold websites, brands and digital experiences.",
    url: "https://redshadowdesigns.com",
    siteName: "Red Shadow Designs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${jost.variable} cunnet-dark`}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
