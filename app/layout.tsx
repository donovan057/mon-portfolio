import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Donovan Rinquebach • Développeur Web Freelance Next.js & React",
  description: "Développeur web freelance spécialisé en Next.js et React. Je conçois des sites vitrines et des applications web sur-mesure, rapides, modernes et optimisés pour convertir vos visiteurs en clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}