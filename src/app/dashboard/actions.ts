"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { getCurrentUser, logout as destroySession } from "@/lib/session";

export type DashboardState = {
  error?: string;
  success?: string;
};

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export async function createPostAction(
  _prevState: DashboardState | undefined,
  formData: FormData,
): Promise<DashboardState> {
  const user = await getCurrentUser();
  if (!user) {
    return { error: "Non autorisé." };
  }

  const title = formData.get("title");
  const content = formData.get("content");
  const excerpt = formData.get("excerpt") ?? "";
  const publish = formData.get("publish") === "on";

  if (typeof title !== "string" || typeof content !== "string") {
    return { error: "Formulaire invalide." };
  }

  const slugBase = slugify(title);
  const slug = `${slugBase}-${Date.now().toString(36)}`;

  await prisma.post.create({
    data: {
      title,
      content,
      excerpt: typeof excerpt === "string" ? excerpt : undefined,
      slug,
      published: publish,
      authorId: user.id,
    },
  });

  revalidatePath("/blog");
  revalidatePath("/dashboard");

  return { success: "Article enregistré !" };
}

export async function logoutAction() {
  await destroySession();
  redirect("/");
}
