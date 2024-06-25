import type { Metadata } from "next";
import "./globals.css";
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { Providers } from "./providers";
import { Navbar } from "@/components/Navbar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Todo App",
  description: "The place where the todo exists",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}>
        <Providers>
          <Navbar />
          <div className="min-h-[calc(100vh-64px)]">{children}</div>zz
        </Providers>
      </body>
    </html>
  );
}
