import "./globals.css";
import Link from "next/link";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/ui/header";
import { GoogleAnalytics } from '@next/third-parties/google';

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata = {
  title: "Hazimi Asyraf",
  description: "Software Engineer, Robotics Enthusiast",
};

export const viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${mono.variable} font-sans antialiased bg-white text-neutral-600 min-h-screen`}
      >
        <Header />
        {children}
        <footer className="max-w-2xl mx-auto px-6 mt-24 py-10 border-t border-neutral-200 flex items-center justify-between font-mono text-xs text-neutral-400">
          <span>© 2026 hazimi asyraf</span>
          <div className="flex gap-6">
            <Link href="https://github.com/jimmyasyraf" className="link-underline hover:text-black transition-colors">github</Link>
            <Link href="mailto:jimmyasyraf@gmail.com" className="link-underline hover:text-black transition-colors">email</Link>
          </div>
        </footer>
      </body>
      <GoogleAnalytics gaId={'G-V8R4LZ2TC4'} />
    </html>
  );
}
