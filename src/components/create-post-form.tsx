"use client";

import { useFormState, useFormStatus } from "react-dom";
import {
  createPostAction,
  type DashboardState,
} from "@/app/dashboard/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-emerald-600 disabled:opacity-70"
    >
      {pending ? "Enregistrement..." : "Ajouter la note"}
    </button>
  );
}

export function CreatePostForm() {
  const [state, formAction] = useFormState<DashboardState, FormData>(
    createPostAction,
    { error: undefined, success: undefined },
  );

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Titre
        </label>
        <input
          type="text"
          name="title"
          required
          className="mt-1 w-full rounded-2xl border border-zinc-200 px-4 py-2 text-sm outline-none focus:border-amber-500 dark:border-zinc-700 dark:bg-zinc-900"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Extrait (optionnel)
        </label>
        <input
          type="text"
          name="excerpt"
          className="mt-1 w-full rounded-2xl border border-zinc-200 px-4 py-2 text-sm outline-none focus:border-amber-500 dark:border-zinc-700 dark:bg-zinc-900"
          placeholder="Résumé court pour la liste des articles"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Contenu
        </label>
        <textarea
          name="content"
          required
          rows={5}
          className="mt-1 w-full rounded-2xl border border-zinc-200 px-4 py-2 text-sm outline-none focus:border-amber-500 dark:border-zinc-700 dark:bg-zinc-900"
        />
      </div>
      <label className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
        <input type="checkbox" name="publish" className="accent-emerald-500" />
        Publier immédiatement
      </label>
      {state?.error ? (
        <p className="text-sm text-red-500">{state.error}</p>
      ) : null}
      {state?.success ? (
        <p className="text-sm text-emerald-500">{state.success}</p>
      ) : null}
      <SubmitButton />
    </form>
  );
}
