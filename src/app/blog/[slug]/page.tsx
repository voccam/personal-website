import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getPostBySlug } from "@/lib/posts";

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Article introuvable" };
  }

  return {
    title: `${post.title} — Blog de Mathis Vandesmal`,
    description: post.excerpt ?? post.content.slice(0, 140),
  };
}

export default async function BlogArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-6 py-12">
      <div className="rounded-3xl border border-zinc-100 bg-white/90 p-8 shadow-sm dark:border-zinc-900 dark:bg-zinc-950/70">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
          {new Intl.DateTimeFormat("fr-BE", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }).format(post.createdAt)}
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          {post.title}
        </h1>
        {post.excerpt ? (
          <p className="mt-3 text-lg text-zinc-600 dark:text-zinc-300">{post.excerpt}</p>
        ) : null}
        <div className="mt-6 space-y-4 text-base leading-relaxed text-zinc-800 dark:text-zinc-200">
          {post.content.split("\n\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <Link
          href="/blog"
          className="mt-8 inline-flex rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-600 hover:border-amber-400 hover:text-amber-600 dark:border-zinc-800 dark:text-zinc-300"
        >
          ← Retour aux articles
        </Link>
      </div>
    </main>
  );
}
