import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import dynamic from "next/dynamic";
import Header from "@/src/components/Header";

const Navbar = dynamic(() => import("@/src/components/Navbar"));
const Footer = dynamic(() => import("@/src/components/Footer"));

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Definisci i metadata di base
const baseMetadata: Metadata = {
  title: "MyPortfolio",
  description: "Generated by create next app",
  icons: {
    icon: "/svg/logo.svg",
  },
};

export default function RootLayout({
  children,
  metadata, // accetta i metadata come props
}: {
  children: React.ReactNode;
  metadata?: Metadata; // Permetti metadata personalizzati per ogni pagina
}) {
  const combinedMetadata = { ...baseMetadata, ...metadata }; // Combina i metadata

  return (
    <>
      <html lang="en">
        <Header metadata={combinedMetadata} />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        >
          <Navbar />
          <main className="flex-grow mt-20 mb-20 px-4">{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
