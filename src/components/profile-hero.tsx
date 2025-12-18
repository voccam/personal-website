import Link from "next/link";
import { profile } from "@/content/profile";

export function ProfileHero() {
  return (
    <section className="rounded-3xl border border-zinc-100 bg-white/90 p-8 shadow-md dark:border-zinc-900 dark:bg-zinc-950/80">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900 text-2xl font-semibold text-white dark:bg-white dark:text-zinc-900">
            MV
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-amber-500">
              Génie électrique
            </p>
            <h1 className="text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
              {profile.name}
            </h1>
            <p className="text-base text-zinc-600 dark:text-zinc-400">
              {profile.title}
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 text-sm text-zinc-600 dark:text-zinc-300 md:text-right">
          <span>{profile.location}</span>
          <Link
            className="text-amber-700 underline-offset-4 hover:underline dark:text-amber-300"
            href={`mailto:${profile.personalEmail}`}
          >
            {profile.personalEmail}
          </Link>
          <Link
            className="text-amber-700 underline-offset-4 hover:underline dark:text-amber-300"
            href={`mailto:${profile.ecamEmail}`}
          >
            {profile.ecamEmail}
          </Link>
          <a
            className="text-zinc-600 dark:text-zinc-200"
            href={`tel:${profile.phone.replace(/\\s+/g, "")}`}
          >
            {profile.phone}
          </a>
        </div>
      </div>
      <p className="mt-6 text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
        {profile.intro}
      </p>
      <div className="mt-6 flex flex-col gap-4 rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-700 dark:bg-zinc-900 dark:text-zinc-200 md:flex-row md:items-center md:justify-between">
        <p>{profile.objectives}</p>
        <span className="font-medium text-amber-600 dark:text-amber-300">
          {profile.quote}
        </span>
      </div>
    </section>
  );
}
