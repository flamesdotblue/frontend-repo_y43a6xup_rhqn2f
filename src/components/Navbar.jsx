import { Rocket, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-rose-500 text-white shadow-md">
              <Rocket size={18} />
            </div>
            <div className="font-semibold tracking-tight text-lg">
              Curious Connect Verse
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-600 dark:text-neutral-300">
            <a href="#features" className="hover:text-black dark:hover:text-white transition">Features</a>
            <a href="#discover" className="hover:text-black dark:hover:text-white transition">Discover</a>
            <a href="#create" className="hover:text-black dark:hover:text-white transition">Create</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/10 px-3 py-2 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition">
              <Sparkles size={16} />
              Explore
            </button>
            <button className="inline-flex items-center gap-2 rounded-md bg-black text-white px-3 py-2 text-sm font-medium hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
