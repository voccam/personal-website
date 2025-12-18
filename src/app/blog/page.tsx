import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";
import { getAllPosts } from "@/lib/posts";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <SectionHeading
        eyebrow="Blog"
        title="Carnet de recherche et retours d&apos;expérience"
        description="Chaque article est stocké en base via Prisma/SQLite. On peut ensuite enrichir ces contenus depuis le tableau de bord sécurisé."
        action={
          <Link
            href="/dashboard"
            className="text-sm font-medium text-amber-700 underline-offset-4 hover:underline"
          >
            Accès admin
          </Link>
        }
      />

      <div className="mt-8 space-y-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="rounded-3xl border border-zinc-100 p-6 transition hover:border-amber-400 dark:border-zinc-800"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
              {new Intl.DateTimeFormat("fr-BE", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              }).format(post.createdAt)}
            </p>
            <Link href={`/blog/${post.slug}`}>
              <h2 className="mt-2 text-2xl font-semibold text-zinc-900 hover:text-amber-600 dark:text-zinc-50 dark:hover:text-amber-300">
                {post.title}
              </h2>
            </Link>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {post.excerpt ?? post.content.slice(0, 160)}…
            </p>
          </article>
        ))}
        {posts.length === 0 ? (
          <p className="text-center text-sm text-zinc-500">
            Aucun article pour le moment. Connecte-toi à l&apos;admin pour en créer.
          </p>
        ) : null}
      </div>
    </main>
  );
}
