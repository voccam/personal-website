import { prisma } from "@/lib/prisma";

export const getRecentPosts = async (take = 2) => {
  return prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    take,
  });
};

export const getAllPosts = async () => {
  return prisma.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
  });
};

export const getPostBySlug = async (slug: string) => {
  return prisma.post.findUnique({
    where: { slug },
  });
};
