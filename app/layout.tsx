import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav-bar";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DomainLoom - AI Search Engine for Brandable Domains",
  description:
    "Find the perfect brand/domain name with AI powered search.",
  metadataBase: new URL("https://domainloom.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
