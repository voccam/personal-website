type SkillGridProps = {
  title: string;
  items: string[];
};

export function SkillGrid({ title, items }: SkillGridProps) {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-800">
      <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
        {title}
      </h3>
      <div className="mt-4 flex flex-wrap gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-zinc-200/70 px-3 py-1 dark:border-zinc-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
