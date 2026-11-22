import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DataField from "@/components/DataField";
import CustomCursor from "@/components/CustomCursor";
import { LanguageProvider } from "@/components/LanguageProvider";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gabriel Nuñez — Backend Developer",
  description:
    "Backend developer focused on Java and Spring Boot, with Django, Express and Ruby experience. Currently learning Data Engineering with Python, pandas, Conda and Jupyter. Based in Arequipa, Perú.",
};

// Dark-only site: tint the mobile browser bar and native controls to match.
export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${geistMono.variable}`}
      >
        <LanguageProvider>
          <DataField />
          <CustomCursor />
          <Navbar />
          <main className="pt-16 md:pt-0">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
