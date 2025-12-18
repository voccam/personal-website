import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export function SectionHeading({ eyebrow, title, description, action }: Props) {
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        {eyebrow ? (
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
            {eyebrow}
          </p>
        ) : null}
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
          {title}
        </h2>
        {description ? (
          <p className="max-w-2xl text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div>{action}</div> : null}
    </div>
  );
}
