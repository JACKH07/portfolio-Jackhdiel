"use client";
import { useEffect, useRef, useState } from "react";
import { Briefcase, Calendar, ChevronRight, MapPin } from "lucide-react";

const experiences = [
  {
    company: "OMCI — Mission BURIDA",
    role: "Consultant Full Stack & Intégrateur — Orange Money CI",
    period: "Septembre — Octobre 2025",
    duration: "2 mois",
    location: "Abidjan, Côte d'Ivoire",
    color: "orange",
    logo: "OM",
    missions: [
      "Intégration du parcours de paiement école dans MAXIT",
      "Développement Backend du parcours de paiement MAXIT BURIDA",
      "Développement Frontend du parcours de paiement MAXIT BURIDA",
    ],
    stack: ["Node.js", "Express", "JavaScript", "JSON", "XML", "Postman", "Git", "GitLab"],
    highlight: "Système de paiement mobile en production — Orange Money CI",
  },
  {
    company: "OMCI — Coffre Fort Rémunéré",
    role: "Consultant Full Stack & Intégrateur — Orange Money CI",
    period: "Août 2025",
    duration: "1 mois",
    location: "Abidjan, Côte d'Ivoire",
    color: "orange",
    logo: "OM",
    missions: [
      "Développement Backend du service Coffre Fort Rémunéré sur MAXIT",
      "Mise en place des endpoints API REST avec Node.js / Express",
      "Développement du tableau de bord (dashboard) de suivi et de gestion",
    ],
    stack: ["Node.js", "Express", "JavaScript", "HTML", "CSS"],
    highlight: "Coffre Fort Rémunéré — Backend & Dashboard MAXIT",
  },
  {
    company: "Daymond",
    role: "Développeur Frontend",
    period: "Janvier — Mars 2025",
    duration: "3 mois",
    location: "Abidjan, Côte d'Ivoire",
    color: "violet",
    logo: "DY",
    missions: [
      "Conception d'un site vitrine mobile connecté à l'application Daymond",
      "Développement d'interfaces utilisateur responsives et fluides",
      "Collaboration avec l'équipe design pour l'intégration des maquettes",
    ],
    stack: ["Angular", "TypeScript", "HTML", "CSS"],
  },
  {
    company: "Les Technologies Informatique Abobo",
    role: "Développeur Backend & Intégrateur",
    period: "Novembre 2022 — Décembre 2024",
    duration: "2 ans",
    location: "Abobo, Abidjan",
    color: "blue",
    logo: "TIA",
    missions: [
      "Conception et développement d'une application de gestion pour l'entreprise",
      "Développement et maintenance d'applications informatiques",
      "Intégration de logiciels et solutions digitales",
      "Intégration d'APIs et gestion des flux de données",
      "Assistance technique et formation des utilisateurs",
    ],
    stack: ["Python", "Django", "MySQL", "PhpMyAdmin", "Postman", "Git", "GitLab", "JSON"],
  },
];

const colorMap: Record<string, { badge: string; border: string; dot: string; bg: string }> = {
  orange: {
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    border: "border-orange-500/20 hover:border-orange-500/40",
    dot: "bg-orange-500",
    bg: "bg-gradient-to-br from-orange-600 to-orange-800",
  },
  violet: {
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    border: "border-violet-500/20 hover:border-violet-500/40",
    dot: "bg-violet-500",
    bg: "bg-gradient-to-br from-violet-600 to-violet-800",
  },
  blue: {
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    border: "border-blue-500/20 hover:border-blue-500/40",
    dot: "bg-blue-500",
    bg: "bg-gradient-to-br from-blue-600 to-blue-800",
  },
};

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const exp = experiences[active];

  return (
    <section id="experience" className="py-24 bg-[#060d1b] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            <Briefcase size={14} />
            <span>Expériences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Parcours <span className="gradient-text">Professionnel</span>
          </h2>
          <p className="text-slate-500 mt-3">
            Des missions concrètes sur des projets à impact réel.
          </p>
        </div>

        <div className={`grid lg:grid-cols-3 gap-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Sidebar - Company list */}
          <div className="lg:col-span-1 space-y-3">
            {experiences.map((ex, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-full text-left p-4 rounded-xl border transition-all duration-200 ${
                  active === i
                    ? `glass-card ${colorMap[ex.color].border} bg-white/3`
                    : "border-white/5 hover:border-white/10 hover:bg-white/2"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold flex-shrink-0 ${colorMap[ex.color].bg}`}>
                    {ex.logo}
                  </div>
                  <div className="min-w-0">
                    <p className={`font-semibold text-sm truncate ${active === i ? "text-white" : "text-slate-400"}`}>
                      {ex.company}
                    </p>
                    <p className="text-slate-500 text-xs truncate">{ex.role}</p>
                  </div>
                  {active === i && (
                    <ChevronRight size={14} className="text-blue-400 flex-shrink-0 ml-auto" />
                  )}
                </div>
                <div className="mt-2 flex items-center gap-2 text-xs text-slate-500">
                  <Calendar size={10} />
                  <span>{ex.duration}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className={`glass-card rounded-2xl p-6 border ${colorMap[exp.color].border} h-full`}>
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold ${colorMap[exp.color].bg} shadow-lg`}>
                      {exp.logo}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg leading-tight">{exp.company}</h3>
                      <p className={`text-sm font-medium ${colorMap[exp.color].badge.split(" ")[1]}`}>{exp.role}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-slate-500 text-sm">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={12} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin size={12} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${colorMap[exp.color].badge}`}>
                  {exp.duration}
                </span>
              </div>

              {/* Highlight */}
              {exp.highlight && (
                <div className={`mb-5 px-4 py-2 rounded-lg border ${colorMap[exp.color].badge} text-xs font-medium`}>
                  ✦ {exp.highlight}
                </div>
              )}

              {/* Missions */}
              <div className="mb-6">
                <h4 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">
                  Missions réalisées
                </h4>
                <ul className="space-y-2">
                  {exp.missions.map((m, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-slate-300 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${colorMap[exp.color].dot}`} />
                      {m}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stack */}
              <div>
                <h4 className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-3">
                  Technologies utilisées
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full text-xs border font-medium ${colorMap[exp.color].badge}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
