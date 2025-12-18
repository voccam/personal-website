"use server";

import bcrypt from "bcryptjs";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { createSession } from "@/lib/session";

export type LoginState = {
  error?: string;
};

export async function loginAction(
  _prevState: LoginState | undefined,
  formData: FormData,
): Promise<LoginState> {
  const email = formData.get("email");
  const password = formData.get("password");

  if (typeof email !== "string" || typeof password !== "string") {
    return { error: "Identifiants invalides." };
  }

  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return { error: "Utilisateur inconnu." };
  }

  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) {
    return { error: "Mot de passe incorrect." };
  }

  await createSession(user.id);
  redirect("/dashboard");
}
