import { MessageCircle, Users, Sparkles, ShieldCheck } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Ask anything",
    desc: "Post questions, theories, and wild ideas. Let the crowd explore with you.",
  },
  {
    icon: Users,
    title: "Form circles",
    desc: "Create topic-based circles to gather people who share the same curiosity.",
  },
  {
    icon: MessageCircle,
    title: "Threaded chats",
    desc: "Keep conversations tidy with nested replies, mentions, and reactions.",
  },
  {
    icon: ShieldCheck,
    title: "Safe by design",
    desc: "Built-in moderation tools and reports keep the space welcoming and kind.",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Designed for meaningful discovery</h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-300">
            Everything you need to ask better questions and find smarter answers — together.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-5 hover:shadow-[0_8px_40px_-10px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_40px_-10px_rgba(0,0,0,0.6)] transition">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-rose-500 text-white shadow-md">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
