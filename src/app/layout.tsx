import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globalsTwo.css";
import "./globals.css";
import Navbar from "@/components/Major/Navbar";
import localFont from "next/font/local";

const inter = Inter({ subsets: ["latin"] });
const formulaCondensed = localFont({
  src: [
    {
      path: "../assets/fonts/FormulaCondensedBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/FormulaCondensedLight.otf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../assets/fonts/FormulaCondensedRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/FormulaCondensedUltralight.otf",
      weight: "100",
      style: "normal",
    },
  ],
  display: "swap",
});
const proxmaNova = localFont({
  src: [
    {
      path: "../assets/fonts/proxima-nova/ProximaNovaBold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../assets/fonts/proxima-nova/ProximaNovaBoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../assets/fonts/proxima-nova/ProximaNovaSemibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../assets/fonts/proxima-nova/ProximaNovaSemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../assets/fonts/proxima-nova/ProximaNovaRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../assets/fonts/proxima-nova/ProximaNovaRegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../assets/fonts/proxima-nova/ProximaNovaLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../assets/fonts/proxima-nova/ProximaNovaLightItalic.otf",
      weight: "300",
      style: "italic",
    },
  ],
  display: "swap",
});


export const metadata: Metadata = {
  title: "GeekPie",
  description: "Software Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${GeistSans.className} dark`}>
        <div className="relative flex w-full items-center justify-center">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
