import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kouakou Jackhdiel Kouame | Développeur Full Stack",
  description:
    "Développeur Full Stack avec 2 ans d'expérience en Python/Django, Node.js et intégration API. Basé en Côte d'Ivoire. Expérience chez Orange Money CI (OMCI).",
  keywords: [
    "Développeur Full Stack",
    "Python Django",
    "Node.js",
    "Angular",
    "API REST",
    "Côte d'Ivoire",
    "Abidjan",
    "Kouakou Jackhdiel Kouame",
    "OMCI",
    "MAXIT",
  ],
  authors: [{ name: "Kouakou Jackhdiel Kouame" }],
  openGraph: {
    title: "Kouakou Jackhdiel Kouame | Développeur Full Stack",
    description:
      "Je conçois des applications performantes, sécurisées et centrées sur l'utilisateur.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kouakou Jackhdiel Kouame | Développeur Full Stack",
    description:
      "Développeur Full Stack basé en Côte d'Ivoire. Python/Django, Node.js, Angular, API REST.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#060d1b" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
