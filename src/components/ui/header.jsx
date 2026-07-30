import Link from "next/link";

export function Header() {
  return (
    <nav className='sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur'>
      <div className="max-w-2xl mx-auto h-14 flex items-center justify-between px-6 text-sm">
        <Link href="/" className="text-black">
          hazimi<span className="text-neutral-400">@</span>asyraf<span className="text-neutral-400">:~$</span>
          <span aria-hidden="true" className="cursor-blink text-neutral-400"> ▊</span>
        </Link>

        <div className="flex flex-row gap-6">
          <Link href="/" className="text-neutral-500 hover:text-black transition-colors">
            ~/home
          </Link>
          <Link href="/blog" className="text-neutral-500 hover:text-black transition-colors">
            ~/blog
          </Link>
        </div>
      </div>
    </nav>
  )
}
