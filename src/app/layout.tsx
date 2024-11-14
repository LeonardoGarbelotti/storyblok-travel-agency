import type { Metadata } from "next";

import Header from "@/app/_components/header";

import StoryblokProvider from "./providers/storyblok-provider";

import { Inter } from "next/font/google"

import "./globals.css";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "My Travel Agency",
  description: "A Travel Agency using Storyblok!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body
          className={`${inter.className} bg-blue-50 antialiased`}
        >
          <Header />
          {children}
        </body>
      </html>
    </StoryblokProvider>
  );
}
