"use client";
import { useEffect, useRef, useState } from "react";
import { FolderOpen, ExternalLink, Tag } from "lucide-react";
import { GithubIcon } from "./icons";

const projects = [
  {
    title: "MAXIT — Système de Paiement",
    subtitle: "Orange Money CI",
    description:
      "Intégration complète de parcours de paiement sur la plateforme MAXIT d'Orange Money Côte d'Ivoire. Développement du Backend et Frontend pour les paiements écoles (BURIDA) et amélioration de l'expérience utilisateur.",
    tags: ["Node.js", "Express", "JavaScript", "XML", "JSON", "API"],
    color: "orange",
    icon: "",
    featured: true,
    context: "Orange Money CI — Production",
    highlights: ["Paiements à fort volume", "Sécurité des transactions", "Expérience utilisateur"],
    link: null,
    github: null,
  },
  {
    title: "Application de Gestion",
    subtitle: "LTI Abobo",
    description:
      "Conception et développement d'une application de gestion complète pour l'entreprise Les Technologies Informatique Abobo. Gestion des ressources, maintenance et formation des utilisateurs.",
    tags: ["Python", "Django", "MySQL", "API REST", "Git"],
    color: "blue",
    icon: "",
    featured: true,
    context: "LTI Abobo — Production",
    highlights: ["Gestion des ressources", "API REST", "Base de données MySQL"],
    link: null,
    github: null,
  },
  
  {
    title: "Site Vitrine Daymond",
    subtitle: "Daymond — Premier fournisseur dropshipping en Afrique",
    description:
      "Conception du site vitrine mobile de Daymond, premier fournisseur spécialisé en dropshipping en Afrique. Application mobile connectée permettant aux vendeurs de gagner des commissions sur chaque vente via leur téléphone.",
    tags: ["Angular", "TypeScript", "HTML", "CSS", "Responsive"],
    color: "violet",
    icon: "📱",
    featured: true,
    context: "Daymond — Production",
    highlights: ["Mobile-first", "Angular", "Dropshipping Afrique"],
    link: "https://daymond.fr/index.html",
    github: null,
  },
  {
    title: "Church Manager",
    subtitle: "Application de gestion d'église",
    description:
      "Application web pour la gestion d'une communauté : organisation, suivi et outils dédiés. Déployée en production sur Vercel pour un accès rapide et fiable.",
    tags: ["Next.js", "React", "TypeScript", "Vercel", "Tailwind CSS","python","django","postgres"],
    color: "emerald",
    icon: "<img src='https://www.image2url.com/r2/default/images/1776455877679-dbfcfa56-a1bd-4a3e-8242-f14513056b35.png' alt='image' />",
    featured: true,
    context: "Démo en ligne — Vercel",
    highlights: ["Production", "Interface moderne", "Hébergement Vercel"],
    link: "https://church-manager-ir5m.vercel.app/",
    github: null,
  },
  {
    title: "Intégration API REST",
    subtitle: "Projets Divers",
    description:
      "Conception et développement de plusieurs intégrations API REST pour des systèmes tiers. Analyse d'architectures existantes, documentation et tests avec Postman.",
    tags: ["API REST", "Postman", "JSON", "Node.js", "Django"],
    color: "blue",
    icon: "⚡",
    featured: false,
    context: "Projets Professionnels",
    highlights: ["Documentation API", "Tests Postman", "Architecture REST"],
    link: null,
    github: null,
  },
];

const colorMap: Record<string, { badge: string; border: string; glow: string; icon: string }> = {
  orange: {
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    border: "border-orange-500/20 hover:border-orange-500/40",
    glow: "hover:shadow-orange-500/10",
    icon: "text-orange-400",
  },
  blue: {
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    border: "border-blue-500/20 hover:border-blue-500/40",
    glow: "hover:shadow-blue-500/10",
    icon: "text-blue-400",
  },
  emerald: {
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
    glow: "hover:shadow-emerald-500/10",
    icon: "text-emerald-400",
  },
  violet: {
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    border: "border-violet-500/20 hover:border-violet-500/40",
    glow: "hover:shadow-violet-500/10",
    icon: "text-violet-400",
  },
};

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [filter, setFilter] = useState<"all" | "featured">("all");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const filtered = filter === "featured" ? projects.filter((p) => p.featured) : projects;

  return (
    <section id="projects" className="py-24 bg-[#0a1120] relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-emerald-950/5 to-transparent pointer-events-none" />
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            <FolderOpen size={14} />
            <span>Projets</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Réalisations <span className="gradient-text">Marquantes</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Des projets concrets déployés en production dans des contextes réels.
          </p>
        </div>

        {/* Filter */}
        <div className={`flex justify-center gap-2 mb-10 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === "all"
                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                : "text-slate-400 hover:text-white border border-white/5 hover:border-white/10"
            }`}
          >
            Tous ({projects.length})
          </button>
          <button
            onClick={() => setFilter("featured")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              filter === "featured"
                ? "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                : "text-slate-400 hover:text-white border border-white/5 hover:border-white/10"
            }`}
          >
            Mis en avant ({projects.filter((p) => p.featured).length})
          </button>
        </div>

        {/* Projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((project, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-5 border ${colorMap[project.color].border} hover:shadow-xl ${colorMap[project.color].glow} transition-all duration-300 group flex flex-col ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + i * 80}ms` }}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{project.icon}</div>
                  <div>
                    {project.featured && (
                      <span className="inline-block px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs mb-1">
                        Featured
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-1.5">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Voir sur GitHub"
                      className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <GithubIcon size={13} />
                    </a>
                  ) : (
                    <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-slate-700 cursor-not-allowed">
                      <GithubIcon size={13} />
                    </span>
                  )}
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Voir le projet en ligne"
                      className="w-7 h-7 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 hover:text-white hover:bg-violet-500/40 transition-colors"
                    >
                      <ExternalLink size={13} />
                    </a>
                  ) : (
                    <span className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center text-slate-700 cursor-not-allowed">
                      <ExternalLink size={13} />
                    </span>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-base mb-1 group-hover:text-blue-300 transition-colors">
                {project.title}
              </h3>
              <p className={`text-xs font-medium mb-3 ${colorMap[project.color].icon}`}>
                {project.subtitle}
              </p>

              {/* Description */}
              <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.highlights.map((h, j) => (
                  <span key={j} className="flex items-center gap-1 text-xs text-slate-500">
                    <Tag size={9} />
                    {h}
                  </span>
                ))}
              </div>

              {/* Tech tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, j) => (
                  <span
                    key={j}
                    className={`px-2 py-0.5 rounded-full text-xs border font-medium ${colorMap[project.color].badge}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Context */}
              <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-1.5 text-slate-600 text-xs">
                <span>{project.context}</span>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <a
            href="https://github.com/jackhdiel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 text-slate-300 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200 text-sm font-medium"
          >
            <GithubIcon size={16} />
            Voir plus sur GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
