import { useMemo, useState } from "react";
import { Search, Tag, ThumbsUp } from "lucide-react";

const initialCuriosities = [
  {
    id: 1,
    title: "Why do some people experience synesthesia?",
    content: "Exploring cross-wiring in the brain and how senses blend together.",
    tags: ["neuroscience", "psychology"],
    likes: 42,
  },
  {
    id: 2,
    title: "Could we 3D print habitats on the Moon using lunar dust?",
    content: "What materials and processes would make it feasible?",
    tags: ["space", "materials"],
    likes: 31,
  },
  {
    id: 3,
    title: "What makes certain melodies universally catchy?",
    content: "Patterns, rhythm, and cultural context across regions.",
    tags: ["music", "culture"],
    likes: 27,
  },
  {
    id: 4,
    title: "How close are we to fusion energy at scale?",
    content: "Reactors, confinement methods, and realistic timelines.",
    tags: ["energy", "physics"],
    likes: 54,
  },
];

export default function CuriosityShowcase() {
  const [query, setQuery] = useState("");
  const [items, setItems] = useState(initialCuriosities);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((c) =>
      [c.title, c.content, ...c.tags].some((t) => t.toLowerCase().includes(q))
    );
  }, [items, query]);

  function like(id) {
    setItems((prev) => prev.map((c) => (c.id === id ? { ...c, likes: c.likes + 1 } : c)));
  }

  function addCuriosity(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const title = form.title.value.trim();
    const content = form.content.value.trim();
    const tags = form.tags.value
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    if (!title || !content) return;
    setItems((prev) => [
      {
        id: Math.max(...prev.map((p) => p.id)) + 1,
        title,
        content,
        tags,
        likes: 0,
      },
      ...prev,
    ]);
    form.reset();
  }

  return (
    <section id="discover" className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Discover what's trending</h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-300 max-w-2xl">
              Search popular threads or share your own curiosity. Upvote what sparks your interest.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" size={18} />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search curiosities, tags, topics..."
              className="w-full pl-10 pr-3 py-2.5 rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur outline-none focus:ring-2 ring-black/10 dark:ring-white/20"
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <article key={c.id} className="rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-5 flex flex-col">
              <h3 className="font-semibold text-lg leading-snug">{c.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 flex-1">{c.content}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                {c.tags.map((t) => (
                  <span key={t} className="inline-flex items-center gap-1 text-xs rounded-full border border-black/10 dark:border-white/10 px-2 py-1 text-neutral-600 dark:text-neutral-300">
                    <Tag size={12} /> {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <button onClick={() => like(c.id)} className="inline-flex items-center gap-2 rounded-md border border-black/10 dark:border-white/10 px-3 py-1.5 text-sm hover:bg-black/5 dark:hover:bg-white/5 transition">
                  <ThumbsUp size={16} /> {c.likes}
                </button>
                <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">Open thread</button>
              </div>
            </article>
          ))}
        </div>

        <div id="create" className="mt-14">
          <div className="rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-tr from-indigo-500/10 via-fuchsia-500/10 to-rose-500/10 p-6">
            <h3 className="font-semibold text-lg">Start something new</h3>
            <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
              Share a question or idea. Add tags to reach the right circles.
            </p>
            <form onSubmit={addCuriosity} className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-3">
              <input name="title" placeholder="Title" className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-3 py-2 outline-none focus:ring-2 ring-black/10 dark:ring-white/20" />
              <input name="content" placeholder="What are you curious about?" className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-3 py-2 outline-none focus:ring-2 ring-black/10 dark:ring-white/20" />
              <input name="tags" placeholder="Tags (comma separated)" className="w-full rounded-md border border-black/10 dark:border-white/10 bg-white/70 dark:bg-neutral-900/70 backdrop-blur px-3 py-2 outline-none focus:ring-2 ring-black/10 dark:ring-white/20" />
              <div className="md:col-span-3 flex items-center justify-end">
                <button className="inline-flex items-center gap-2 rounded-md bg-black text-white px-4 py-2 text-sm font-medium hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 transition">
                  Publish
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
