## Personal website — Mathis Vandesmal

CV interactif et portfolio présentant les projets ECAM (Sticker Tracker, StrideSense, bot 2048…). L'application combine Next.js (App Router), Prisma/SQLite, authentification sécurisée et déploiement par Docker.

### Stack

- Next.js 16 avec React Server Components et Tailwind CSS v4.
- Prisma + SQLite (`dev.db`) pour les utilisateurs, sessions et articles de blog.
- Authentification maison : formulaire credentials → session token stocké en base + cookie httpOnly.
- Dockerfile multi-stage prêt à être poussé sur n'importe quel registre.

### Lancer en local

```bash
npm install
npx prisma db push      # Crée/actualise le schéma SQLite
npx tsx prisma/seed.ts  # Génère l'utilisateur admin + contenu de démo
npm run dev
```

Le site s'ouvre sur [http://localhost:3000](http://localhost:3000).

Identifiants de démonstration : `admin@local.test` / `ChangeMe123!` (modifiables dans `prisma/seed.ts`).

### Authentification & blog

- Le formulaire `/login` vérifie les identifiants avec bcrypt.
- Un token de session est enregistré dans la table `Session` et placé en cookie httpOnly.
- Le tableau de bord `/dashboard` (protégé) permet de créer des articles (stockés en base et visibles sur `/blog`).

### Docker

```
docker build -t mathis-portfolio .
docker run -p 3000:3000 mathis-portfolio
```

Le conteneur embarque la base `dev.db`. Pour préserver des données persistantes, montez un volume ou migrez vers un SGBD distant et mettez à jour `DATABASE_URL`.
