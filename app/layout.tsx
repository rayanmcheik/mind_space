import type { ReactNode } from "react";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Section2 from "./components/Section2";
import Section1 from "./components/Section1";
import Footer from "./components/Footer";


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

          <Section1 />
          <Section2></Section2>
          <Footer />
          {children}
        </main>
      </body>
    </html>
  );
}
