import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Section2 from "./components/Section2";


const momoTrust = localFont({
  src: "../public/fonts/MomoTrustSans-VariableFont_wght.ttf",
  variable: "--font-momoTrust",
  weight: "200 800",
  style: "normal",
  display: "swap",
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={momoTrust.variable}>
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className="font-momo">
        <Header /> 
        <main className="relative min-h-screen">

          <Section2></Section2>
          {children} 
        </main>
      </body>
    </html>
  );
}
