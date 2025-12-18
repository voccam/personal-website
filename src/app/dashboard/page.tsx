import Link from "next/link";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";
import { CreatePostForm } from "@/components/create-post-form";
import { logoutAction } from "./actions";

export default async function DashboardPage() {
  const user = await getCurrentUser();
  if (!user) {
    redirect("/login");
  }

  const recentPosts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
    take: 6,
  });

  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div className="rounded-3xl border border-zinc-100 bg-white/80 p-8 shadow-sm dark:border-zinc-900 dark:bg-zinc-950/70">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
              Tableau de bord
            </p>
            <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
              Bonjour {user.email}
            </h1>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              Utilise ce panneau pour rédiger de nouvelles notes, préparer les
              expériences PoopMap/StrideSense ou gérer les publications du blog.
            </p>
          </div>
          <form action={logoutAction}>
            <button
              type="submit"
              className="rounded-full border border-zinc-200 px-5 py-2 text-sm font-semibold text-zinc-600 hover:border-amber-400 hover:text-amber-600 dark:border-zinc-700 dark:text-zinc-300"
            >
              Se déconnecter
            </button>
          </form>
        </div>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Nouvelle note de recherche
            </h2>
            <p className="mb-4 text-sm text-zinc-500">
              En quelques phrases, documente un test matériel, une idée ou un état
              d&apos;avancement.
            </p>
            <CreatePostForm />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Derniers articles
            </h2>
            <div className="mt-4 space-y-4">
              {recentPosts.map((post) => (
                <div
                  key={post.id}
                  className="rounded-2xl border border-zinc-100 p-4 text-sm dark:border-zinc-800"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                    {new Intl.DateTimeFormat("fr-BE", {
                      day: "2-digit",
                      month: "short",
                    }).format(post.createdAt)}
                  </p>
                  <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                    {post.title}
                  </p>
                  <div className="mt-1 flex items-center justify-between text-xs text-zinc-500">
                    <span>{post.published ? "Publié" : "Brouillon"}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-amber-600 underline-offset-4 hover:underline"
                    >
                      Ouvrir
                    </Link>
                  </div>
                </div>
              ))}
              {recentPosts.length === 0 ? (
                <p className="text-sm text-zinc-500">
                  Aucun article pour l&apos;instant. Publie ton premier billet !
                </p>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
