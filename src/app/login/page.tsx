import { LoginForm } from "@/components/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-md px-6 py-12">
      <div className="rounded-3xl border border-zinc-100 bg-white/80 p-8 shadow-sm dark:border-zinc-900 dark:bg-zinc-950/70">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
          Accès sécurisé
        </p>
        <h1 className="mt-2 text-3xl font-semibold text-zinc-900 dark:text-zinc-50">
          Tableau de bord
        </h1>
        <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          Connecte-toi pour gérer les billets du blog, valider les spots Sticker Tracker
          ou préparer les prochains sprints.
        </p>
        <div className="mt-6">
          <LoginForm />
        </div>
        <p className="mt-6 text-xs text-zinc-500">
          Identifiants démo : <strong>admin@local.test</strong> /{" "}
          <strong>ChangeMe123!</strong> (voir prisma/seed.ts). Pense à modifier le mot
          de passe avant un déploiement public.
        </p>
      </div>
      <p className="mt-4 text-center text-sm text-zinc-600">
        Besoin d&apos;un compte ? Contactez Mathis —{" "}
        <Link href="mailto:mathisvds932@gmail.com" className="text-amber-600 underline">
          mathisvds932@gmail.com
        </Link>
      </p>
    </main>
  );
}
