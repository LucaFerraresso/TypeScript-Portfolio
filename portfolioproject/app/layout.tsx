import type { Metadata } from "next";
import "./globals.css";
import dynamic from "next/dynamic";
import Header from "@/src/components/atoms/Header";

const Navbar = dynamic(() => import("@/src/components/sections/Navbar"));
const Footer = dynamic(() => import("@/src/components/sections/Footer"));

const baseMetadata: Metadata = {
  title: "MyPortfolio",
  description: "Generated by create next app",
  icons: {
    icon: "/svg/logo.svg",
  },
};

export const generateMetadata = (): Metadata => {
  return baseMetadata;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <Header metadata={generateMetadata()} />
        </head>
        <body className="antialiased min-h-screen flex flex-col font-mono bg-gray-50">
          <Navbar />
          {/* Layout principale */}
          <main className="flex-grow flex-shrink-0 pt-20 pb-20 px-4 sm:px-6 md:px-8">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </>
  );
}
