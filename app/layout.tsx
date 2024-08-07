/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "./context/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "500", "700", "800", "900"],
  variable: "--font-inter",
});
const spaceGrostesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "500", "700"],
  variable: "--font-spaceGrostesk",
});

export const metadata: Metadata = {
  title: "DevFlow",
  description: " A community of worshipers",
  icons: {
    icon: "/assets/images/site.logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrostesk.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
