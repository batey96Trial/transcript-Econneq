import type { Metadata } from "next";
import { Geist, Geist_Mono,Montserrat,Open_Sans, } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight:['400','600','700'],
  variable: "--font-montserrat",
  subsets: ["latin"]
});
const openSans = Open_Sans({
  weight:['400','600','700'],
  variable: "--font-open-sans",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Transcript-Econneq",
  description: "Econneq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          `${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${openSans.variable}
          antialiased m-3 sm:m-3
          `}
      >
        {children}
      </body>
    </html>
  );
}
