import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Instragram clone",
  description: "Made by Nixon",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-50 min-h-screen">
      
      <body className={inter.className}><Header/>{children}</body>
    </html>
  );
}
