import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <nav className='sticky top-0 z-50 border-b border-neutral-200 dark:border-neutral-900 bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur'>
      <div className="max-w-2xl mx-auto h-14 flex items-center justify-between px-6">
        <Link href="/" className="text-sm font-medium text-black dark:text-white">
          Hazimi Asyraf
        </Link>

        <div className="flex flex-row gap-6 font-mono text-xs">
          <Link href="/" className="link-underline text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
            home
          </Link>
          <Link href="/blog" className="link-underline text-neutral-500 hover:text-black dark:hover:text-white transition-colors">
            blog
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
