// 'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { PageProvider } from "@/context/PageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Created by Prasanna",
};

export default function RootLayout({ Component, pageProps }) {
  return (
    <PageProvider>
      <Component {...pageProps} />
    </PageProvider>
  );
}
