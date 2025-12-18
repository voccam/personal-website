import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
        404 — page introuvable
      </p>
      <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
        Oups, ce contenu n&apos;existe pas encore.
      </h1>
      <p className="max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
        Peut-être que je suis justement en train de le concevoir pour un prochain
        prototype. En attendant, vous pouvez explorer le blog ou les projets détaillés.
      </p>
      <div className="flex flex-wrap justify-center gap-4 text-sm">
        <Link
          href="/"
          className="rounded-full bg-amber-500 px-5 py-2 font-semibold text-white hover:bg-amber-600"
        >
          Retour à l&apos;accueil
        </Link>
        <Link
          href="/projects"
          className="rounded-full border border-amber-500 px-5 py-2 font-semibold text-amber-600 hover:bg-amber-50"
        >
          Voir les projets
        </Link>
      </div>
    </main>
  );
}
