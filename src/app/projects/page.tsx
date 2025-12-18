import { SectionHeading } from "@/components/section-heading";
import { ProjectCard } from "@/components/project-card";
import { innovationProjects } from "@/content/profile";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <SectionHeading
        eyebrow="Portfolio"
        title="Laboratoire d&apos;idées : du campus ECAM aux objets connectés"
        description="Chaque concept ci-dessous est documenté comme un mini-projet avec problématique, approche technique et étapes suivantes."
        action={
          <Link
            href="/"
            className="text-sm font-medium text-amber-700 underline-offset-4 hover:underline"
          >
            Retour à l&apos;accueil
          </Link>
        }
      />

      <div className="mt-8 grid gap-6">
        {innovationProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>

      <section className="mt-10 rounded-3xl border border-zinc-100 bg-white/90 p-6 text-sm text-zinc-600 shadow-sm dark:border-zinc-900 dark:bg-zinc-950/70 dark:text-zinc-300">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Focus sur Sticker Tracker — l&apos;équivalent ECAM de PoopMap
        </h3>
        <p className="mt-3">
          L&apos;objectif : cartographier tous les stickers et QR codes de l&apos;école pour
          raconter comment la communauté hacke les espaces publics. Les étudiants
          s&apos;authentifient pour déposer un spot, préciser le type de sticker, joindre
          une photo et proposer un mini-challenge. Cette base de données peut ensuite
          alimenter un classement par promotion ou servir de support à des événements
          (chasses au trésor, portes ouvertes, etc.).
        </p>
        <ul className="mt-4 list-inside list-disc space-y-1 text-zinc-600 dark:text-zinc-400">
          <li>Interface géolocalisée et responsive (mobile d&apos;abord).</li>
          <li>Modération simple via le tableau de bord protégé par authentification.</li>
          <li>
            Export JSON pour alimenter d&apos;autres projets étudiants (data viz,
            mur interactif, etc.).
          </li>
        </ul>
      </section>
    </main>
  );
}
