import { ProfileHero } from "@/components/profile-hero";
import { SectionHeading } from "@/components/section-heading";
import { SkillGrid } from "@/components/skill-grid";
import { Timeline } from "@/components/timeline";
import { BlogPreview } from "@/components/blog-preview";
import { ProjectCard } from "@/components/project-card";
import {
  education,
  experiences,
  innovationProjects,
  skills,
} from "@/content/profile";
import { getRecentPosts } from "@/lib/posts";
import Link from "next/link";

export default async function Home() {
  const posts = await getRecentPosts(2);

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-12">
      <ProfileHero />

      <section className="rounded-3xl border border-zinc-100 bg-white/80 p-6 shadow-sm dark:border-zinc-900 dark:bg-zinc-950/60">
        <SectionHeading
          eyebrow="Parcours"
          title="Expériences de terrain et formations"
          description="Une base militaire pour la rigueur, ECAM pour l&apos;électronique appliquée et les systèmes embarqués."
        />
        <div className="mt-6">
          <Timeline experiences={experiences} education={education} />
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <SkillGrid title="Compétences techniques" items={skills.technical} />
        <SkillGrid title="Stack produit & web" items={skills.product} />
        <SkillGrid title="Soft skills" items={skills.soft} />
        <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-800">
          <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
            Langues & centres d&apos;intérêt
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            {skills.languages.map((lang) => (
              <li
                key={lang.label}
                className="flex items-center justify-between rounded-xl border border-zinc-100/70 px-3 py-2 dark:border-zinc-800"
              >
                <span className="font-medium text-zinc-900 dark:text-zinc-50">
                  {lang.label}
                </span>
                <span className="text-xs uppercase tracking-widest text-zinc-500">
                  {lang.level}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-zinc-100 px-3 py-1 text-xs text-zinc-600 dark:border-zinc-700 dark:text-zinc-400"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-zinc-100 bg-white/90 p-6 shadow-sm dark:border-zinc-900 dark:bg-zinc-950/60">
          <SectionHeading
            eyebrow="Lettre de motivation"
            title="Valeur ajoutée pour un stage en électronique & web"
          />
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Depuis la formation militaire jusqu&apos;aux projets Arduino, j&apos;ai cultivé la
            capacité à rester fiable dans des contextes exigeants. Ce site illustre
            mes compétences acquises récemment : architecture Next.js, base de données
            Prisma, sécurisation d&apos;accès et déploiement via Docker. Je suis prêt à
            intégrer une équipe R&D et à livrer rapidement des prototypes utiles.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="mailto:mathisvds932@gmail.com"
              className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-amber-600"
            >
              Me contacter
            </Link>
            <Link
              href="/projects"
              className="rounded-full border border-amber-500 px-5 py-2 text-sm font-semibold text-amber-600 hover:bg-amber-50"
            >
              Explorer les projets
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-zinc-100 bg-white/90 p-6 dark:border-zinc-900 dark:bg-zinc-950/60">
          <SectionHeading
            eyebrow="Objectif"
            title="Mettre les technologies au service d&apos;une communauté"
            description="Du campus ECAM aux coureurs amateurs, chaque prototype répond à un besoin concret."
          />
          <ul className="mt-4 space-y-3 text-sm text-zinc-600 dark:text-zinc-400">
            <li>
              <strong>Sticker Tracker :</strong> dynamiser la communication interne
              par une carte ludique.
            </li>
            <li>
              <strong>Defibrillator Wristband :</strong> sécuriser un geste vital
              grâce à un guide haptique.
            </li>
            <li>
              <strong>StrideSense :</strong> démocratiser des métriques de course avancées.
            </li>
            <li>
              <strong>Bot 2048 :</strong> vulgariser l&apos;IA par un jeu accessible.
            </li>
          </ul>
          <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            Chaque idée mêle électronique embarquée et stack web moderne pour
            partager les données collectées, raconter l&apos;histoire du projet et
            impliquer la communauté.
          </p>
        </div>
      </section>

      <section id="projects" className="space-y-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Prototypes et concepts en cours"
          description="Ces projets servent de laboratoire pour combiner hardware, logiciel et design produit."
          action={
            <Link
              href="/projects"
              className="text-sm font-medium text-amber-700 underline-offset-4 hover:underline"
            >
              Portfolio détaillé
            </Link>
          }
        />
        <div className="grid gap-6 md:grid-cols-2">
          {innovationProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {posts.length > 0 ? <BlogPreview posts={posts} /> : null}

      <section className="rounded-3xl border border-zinc-100 bg-white/90 p-6 text-sm text-zinc-600 shadow-sm dark:border-zinc-900 dark:bg-zinc-950/60 dark:text-zinc-400">
        <p>
          Ce site démontre un stack complet : Next.js (app router), Prisma + SQLite,
          authentification sur mesure, interface responsive et conteneurisation Docker.
          Le code est versionné sur Git avec un historique clair pour retracer les
          itérations.
        </p>
        <p className="mt-4 font-medium text-zinc-900 dark:text-zinc-100">
          Prochaine étape : connecter les capteurs physiques (StrideSense) et afficher
          les données via des dashboards temps réel.
        </p>
      </section>
    </main>
  );
}
