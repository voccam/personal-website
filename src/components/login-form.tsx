"use client";

import { useFormState, useFormStatus } from "react-dom";
import { loginAction, type LoginState } from "@/app/login/actions";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-70"
    >
      {pending ? "Connexion..." : "Se connecter"}
    </button>
  );
}

export function LoginForm() {
  const [state, formAction] = useFormState<LoginState, FormData>(loginAction, {
    error: undefined,
  });

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          className="mt-1 w-full rounded-2xl border border-zinc-200 px-4 py-2 text-sm outline-none focus:border-amber-500 dark:border-zinc-700 dark:bg-zinc-900"
          placeholder="admin@local.test"
        />
      </div>
      <div>
        <label className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Mot de passe
        </label>
        <input
          type="password"
          name="password"
          required
          className="mt-1 w-full rounded-2xl border border-zinc-200 px-4 py-2 text-sm outline-none focus:border-amber-500 dark:border-zinc-700 dark:bg-zinc-900"
          placeholder="••••••••"
        />
      </div>
      {state?.error ? (
        <p className="text-sm text-red-500">{state.error}</p>
      ) : null}
      <SubmitButton />
    </form>
  );
}
