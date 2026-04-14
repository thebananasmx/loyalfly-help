import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import React from "react";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Loyalfly Help Center",
  description: "Centro de ayuda y documentación para Loyalfly",
  icons: {
    icon: "https://res.cloudinary.com/dg4wbuppq/image/upload/f_auto,q_auto,w_32/v1773168526/favicon_izlhv3.png",
    apple: "https://res.cloudinary.com/dg4wbuppq/image/upload/f_auto,q_auto,w_180/v1767634073/apple-touch-icon_o7gyu5.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
