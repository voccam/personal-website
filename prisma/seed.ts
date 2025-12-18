import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";
import bcrypt from "bcryptjs";

// Si ton .env contient DATABASE_URL="file:./dev.db"
const url = process.env.DATABASE_URL ?? "file:./dev.db";

const adapter = new PrismaBetterSqlite3({ url });
const prisma = new PrismaClient({ adapter });

// ... le reste de ton seed (main(), upsert, etc.)


async function main() {
  const adminEmail = "admin@local.test";
  const adminPassword = "ChangeMe123!";

  await prisma.session.deleteMany();

  const passwordHash = await bcrypt.hash(adminPassword, 12);

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      passwordHash,
    },
  });

  const posts = [
    {
      title: "Sticker Tracker : carnet de terrain",
      slug: "sticker-tracker-journal",
      excerpt:
        "Pourquoi une carte communautaire donne envie aux étudiants de sortir coller des QR codes partout sur le campus.",
      content:
        "J'ai commencé par un prototype Next.js connecté à SQLite via Prisma. Les étudiants peuvent soumettre un spot avec coordonnées, rapide description et photo. Le but : créer un mini jeu de piste où chaque QR code renvoie vers un défi ou une ressource pédagogique. Les prochaines étapes : modération temps réel et visualisation sur carte.",
    },
    {
      title: "StrideSense : capteur lacets pour coureurs",
      slug: "stridesense-prototype",
      excerpt:
        "Analyse des foulées sans montre intelligente, directement sur les lacets.",
      content:
        "Je teste un clip imprimé en 3D contenant un IMU, un MCU ultra low power et un module BLE. L'idée est d'envoyer cadence, temps de contact et symétrie vers un tableau de bord Next.js. Ce projet me permet de combiner électronique embarquée et visualisation de données modernes.",
    },
    {
      title: "Bot 2048 : heuristiques gagnantes",
      slug: "bot-2048-strategies",
      excerpt:
        "Comparaison d'algorithmes pour pousser le jeu 2048 au-delà de la case 4096.",
      content:
        "Utilisation de TypeScript pour coder différentes stratégies (priorité aux coins, monotonicité, score potentiel). Les résultats sont stockés dans Prisma pour analyser les runs et identifier les heuristiques les plus fiables.",
    },
    {
      title: "Defibrillator wristband : logbook R&D",
      slug: "defibrillator-wristband-log",
      excerpt:
        "Journal des recherches pour un défibrillateur au poignet avec guidage haptique.",
      content:
        "État de l'art, schémas électroniques et essais sur la réduction des faux positifs. Je documente également la roadmap logicielle côté application web pour suivre l'état du matériel sur le terrain.",
    },
  ];

  await Promise.all(
    posts.map((post) =>
      prisma.post.upsert({
        where: { slug: post.slug },
        update: {},
        create: {
          ...post,
          published: true,
          authorId: admin.id,
        },
      }),
    ),
  );

  console.log("Seed completed.");
  console.log("Admin credentials:");
  console.log(`Email: ${adminEmail}`);
  console.log(`Password: ${adminPassword}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
