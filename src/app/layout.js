import "./globals.css";
import { Inter } from "next/font/google";
import { Header } from "@/components/ui/header";

const font = Inter({
  subsets: ["latin"],
})

export const metadata = {
  title: "Hazimi Asyraf",
  description: "Software Engineer, Robotics Enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-neutral-100`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
