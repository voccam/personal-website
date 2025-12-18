import type { Experience, Formation } from "@/content/profile";

type TimelineProps = {
  experiences: Experience[];
  education: Formation[];
};

export function Timeline({ experiences, education }: TimelineProps) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Expériences
        </h3>
        <ul className="mt-4 space-y-5">
          {experiences.map((exp) => (
            <li
              key={`${exp.role}-${exp.period}`}
              className="rounded-2xl border border-zinc-100 p-4 dark:border-zinc-800"
            >
              <p className="text-sm uppercase tracking-wide text-zinc-400">
                {exp.period}
              </p>
              <p className="mt-1 font-semibold text-zinc-900 dark:text-zinc-50">
                {exp.role}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {exp.organization}
              </p>
              <p className="mt-2 text-sm text-zinc-500">{exp.description}</p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
          Formations
        </h3>
        <ul className="mt-4 space-y-5">
          {education.map((school) => (
            <li
              key={`${school.title}-${school.period}`}
              className="rounded-2xl border border-zinc-100 p-4 dark:border-zinc-800"
            >
              <p className="text-sm uppercase tracking-wide text-zinc-400">
                {school.period}
              </p>
              <p className="mt-1 font-semibold text-zinc-900 dark:text-zinc-50">
                {school.title}
              </p>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                {school.school}
              </p>
              {school.details ? (
                <p className="mt-2 text-sm text-zinc-500">{school.details}</p>
              ) : null}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
