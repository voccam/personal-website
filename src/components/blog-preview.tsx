import Link from "next/link";
import type { Post } from "@prisma/client";
import { SectionHeading } from "@/components/section-heading";

type Props = {
  posts: Post[];
};

export function BlogPreview({ posts }: Props) {
  return (
    <section className="space-y-6 rounded-3xl border border-zinc-100 bg-white/90 p-6 shadow-sm dark:border-zinc-900 dark:bg-zinc-950/70">
      <SectionHeading
        eyebrow="Blog"
        title="Récits techniques & expérimentations"
        description="Notes de recherche, retours d'expérience et prototypes partagés avec la communauté ECAM."
        action={
          <Link
            href="/blog"
            className="text-sm font-medium text-amber-700 underline-offset-4 hover:underline dark:text-amber-300"
          >
            Voir tous les articles
          </Link>
        }
      />
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-zinc-100 p-4 transition hover:-translate-y-1 hover:border-amber-400 dark:border-zinc-800"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              {new Intl.DateTimeFormat("fr-BE", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              }).format(post.createdAt)}
            </p>
            <h3 className="mt-2 text-lg font-semibold text-zinc-900 group-hover:text-amber-700 dark:text-zinc-50 dark:group-hover:text-amber-300">
              {post.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {post.excerpt ?? post.content.slice(0, 120)}…
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
