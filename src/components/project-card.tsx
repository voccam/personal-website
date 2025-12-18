import type { ProjectConcept } from "@/content/profile";

const statusColors: Record<ProjectConcept["status"], string> = {
  ideation: "bg-blue-100 text-blue-800 dark:bg-blue-500/20 dark:text-blue-200",
  prototype:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-500/20 dark:text-emerald-200",
  research:
    "bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-200",
};

export function ProjectCard({ project }: { project: ProjectConcept }) {
  return (
    <article className="rounded-2xl border border-zinc-100 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/80 dark:shadow-none">
      <div className="flex items-center gap-2 text-xs uppercase tracking-wide text-zinc-500">
        <span className={`rounded-full px-2 py-0.5 ${statusColors[project.status]}`}>
          {project.status}
        </span>
        <span className="text-[11px] text-zinc-400">{project.focus}</span>
      </div>
      <h3 className="mt-3 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
        {project.title}
      </h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {project.summary}
      </p>
      <p className="mt-4 text-sm text-zinc-500 dark:text-zinc-500">
        {project.details}
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-700 dark:text-zinc-300">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-zinc-200 px-3 py-1 dark:border-zinc-700"
          >
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
