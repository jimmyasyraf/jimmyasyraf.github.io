"use client";

import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import { Button } from "@/components/ui/button";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
})

export function Header() {

  return (
    <nav className='sticky top-0 h-14 border-b bg-white z-50 backdrop-blur bg-opacity-70'>
      <div className="max-w-2xl mx-auto h-14 flex items-center justify-between px-4">
        <div>
          <Link
            href="/"
          >
            <h1 className={` font-semibold text-lg`}>Hazimi Asyraf</h1>
          </Link>
        </div>


        <div className="flex flex-row gap-8">
          <Link
            href="/"
          >
            <h1 className={`font-normal text-sm`}>Home</h1>
          </Link>
          <Link
            href="/blog"
          >
            <h1 className={`font-normal text-sm`}>Blog</h1>
          </Link>
        </div>
      </div>
    </nav>
  )
}
