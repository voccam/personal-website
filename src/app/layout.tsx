import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mathis Vandesmal — CV & Portfolio",
  description:
    "CV interactif, portfolio et carnet de recherche de Mathis Vandesmal (ECAM Bruxelles). Projets IoT, capteurs, innovation étudiante et expérimentations web modernes.",
  metadataBase: new URL("https://personal-website.local"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-amber-50/30 text-zinc-900 dark:from-black dark:via-zinc-900 dark:to-zinc-900">
          <header className="border-b border-zinc-100/80 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60">
            <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-sm">
              <Link href="/" className="font-semibold text-zinc-900 dark:text-white">
                MV · Portfolio
              </Link>
              <nav className="flex gap-6 text-zinc-600 dark:text-zinc-300">
                <Link href="/#projects" className="hover:text-amber-600">
                  Projets
                </Link>
                <Link href="/blog" className="hover:text-amber-600">
                  Blog
                </Link>
                <Link href="/projects" className="hover:text-amber-600">
                  Portfolio détaillé
                </Link>
                <Link href="/login" className="font-medium hover:text-amber-600">
                  Accès sécurisé
                </Link>
              </nav>
            </div>
          </header>
          {children}
          <footer className="mt-16 border-t border-zinc-100 bg-white/90 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800 dark:bg-zinc-950/80 dark:text-zinc-400">
            Construit avec Next.js, Prisma, Tailwind CSS et Docker — {new Date().getFullYear()}
          </footer>
        </div>
      </body>
    </html>
  );
}
