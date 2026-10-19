import type { Metadata } from "next";
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

const themeInit = `(function(){try{if(localStorage.getItem("theme")==="dark"){document.documentElement.classList.add("dark")}}catch(e){}})()`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
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
