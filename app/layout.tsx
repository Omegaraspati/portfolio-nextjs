import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PrelineScript from "@/components/PrelineScript";


export const metadata: Metadata = {
  title: "My-Portfolio",
  description: "Portfolio Omega",
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
        <main className='relative overflow-hidden'>
        {children}
        </main>
        <Footer />
      </body>
      <PrelineScript />
    </html>

  );
}
