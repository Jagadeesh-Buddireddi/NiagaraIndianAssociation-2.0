import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";

export const metadata: Metadata = {
  title: "Niagara Indian Association",
  description:
    "Niagara Indian Association — Connecting communities, celebrating culture and building meaningful relationships across the Niagara Region.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}