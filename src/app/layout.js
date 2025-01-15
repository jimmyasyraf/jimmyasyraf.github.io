import "./globals.css";
import { DM_Sans, Inter, Space_Grotesk } from "next/font/google";
import { Header } from "@/components/ui/header";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
})

const dmSans = Inter({
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
        className={`${dmSans.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
