import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 px-3 py-1 text-xs text-neutral-600 dark:text-neutral-300 backdrop-blur">
            <span className="inline-block h-2 w-2 rounded-full bg-gradient-to-tr from-indigo-500 to-fuchsia-500" />
            A playground for the curious
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
            Connect through questions, ideas, and discoveries
          </h1>
          <p className="mt-5 text-neutral-600 dark:text-neutral-300 text-base sm:text-lg max-w-xl">
            Share what fascinates you, spark conversations, and uncover answers together. Dive into a vibrant space where curiosity turns into connection.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#create" className="inline-flex items-center gap-2 rounded-md bg-black text-white px-4 py-2.5 text-sm font-medium hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 transition">
              Start a thread
              <ArrowRight size={16} />
            </a>
            <a href="#discover" className="inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/10 px-4 py-2.5 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/5 transition">
              Browse topics
            </a>
          </div>
        </div>
        <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <Spline scene="https://prod.spline.design/6YjO17JvZsaAJ2bT/scene.splinecode" style={{ width: "100%", height: "100%" }} />
          </div>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent dark:from-neutral-950 dark:via-neutral-950/10" />
        </div>
      </div>
      <div className="pointer-events-none absolute -z-[0] inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-200/40 via-white to-white dark:from-indigo-500/10 dark:via-neutral-900 dark:to-neutral-950" />
    </section>
  );
}
