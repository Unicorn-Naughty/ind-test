import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "./components/shared/header/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Test-Ind",
  description: "test page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" data-rh="true" href="/logo-big.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} flex flex-col antialiased`}
      >
        <Header className="pt-4" />
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
