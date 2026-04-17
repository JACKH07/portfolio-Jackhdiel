"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { User, Target, Zap, Award, Code, Database, Globe } from "lucide-react";

const stats = [
  { value: "3+", label: "Ans d'expérience", icon: Award },
  { value: "5+", label: "Projets livrés", icon: Target },
  { value: "3+", label: "Technologies maîtrisées", icon: Code },
  { value: "2", label: "Entreprises majeures", icon: Zap },
];

const highlights = [
  {
    icon: Code,
    title: "Analyse Architecture Applicative",
    desc: "Analyse d'architectures existantes, prise en main rapide de projets externes et intégration API.",
    color: "blue",
  },
  {
    icon: Zap,
    title: "Débogage Applicatif",
    desc: "Débogage intuitif, maintenance et amélioration d'applications en production.",
    color: "violet",
  },
  {
    icon: Database,
    title: "Bases de données & Versionning",
    desc: "MySQL, MongoDB, SQL CRUD. Gestion Git/GitLab avec nomenclature explicite des tâches.",
    color: "emerald",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-[#060d1b] relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />
      <div
        ref={ref}
        className="max-w-6xl mx-auto px-4 sm:px-6"
      >
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            <User size={14} />
            <span>À propos</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Qui suis-je <span className="gradient-text">?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Text */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p className="text-lg">
                Je suis{" "}
                <span className="text-white font-semibold">Kouakou Jackhdiel Kouame</span>,
                un développeur Full Stack passionné avec{" "}
                <span className="text-blue-400 font-semibold">3 ans d&apos;expérience</span>{" "}
                basé à Abidjan, Côte d&apos;Ivoire.
              </p>
              <p>
                Diplômé d&apos;un <span className="text-slate-300">Master 2 en Génie Logiciel</span>,
                j&apos;ai eu l&apos;opportunité de travailler sur des projets à fort impact,
                notamment chez{" "}
                <span className="text-blue-400 font-semibold">Orange Money Côte d&apos;Ivoire</span>{" "}
                où j&apos;ai intégré et développé des parcours de paiement sur la plateforme{" "}
                <span className="text-violet-400 font-semibold">MAXIT</span>.
              </p>
              <p>
                Ma force réside dans ma capacité à{" "}
                <span className="text-slate-300">analyser l&apos;architecture</span> d&apos;applications
                existantes, à{" "}
                <span className="text-slate-300">déboguer de façon intuitive</span> et à livrer
                des solutions qui répondent vraiment aux besoins métiers.
              </p>
              <p>
                Je suis à l&apos;aise aussi bien côté{" "}
                <span className="text-emerald-400 font-medium">backend</span> (Python/Django, Node.js)
                que côté{" "}
                <span className="text-orange-400 font-medium">frontend</span> (Angular, JavaScript)
                et dans l&apos;intégration d&apos;APIs REST.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3 pt-2">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                const colorMap = {
                  blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
                  violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
                  emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
                };
                return (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/2 border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 border ${colorMap[h.color as keyof typeof colorMap]}`}>
                      <Icon size={16} />
                    </div>
                    <div>
                      <p className="text-slate-200 font-semibold text-sm">{h.title}</p>
                      <p className="text-slate-500 text-xs mt-0.5">{h.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right - Stats */}
          <div className={`space-y-6 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {/* Profile photo */}
            <div className="flex justify-center">
              <div className="relative w-40 h-40 rounded-2xl overflow-hidden border-2 border-blue-500/20 shadow-2xl shadow-blue-500/10">
                <Image
                  src="/profile.png"
                  alt="Kouakou Jackhdiel Kouame"
                  fill
                  className="object-cover object-top"
                  sizes="160px"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#060d1b]/40 to-transparent" />
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={i}
                    className="glass-card rounded-2xl p-6 text-center hover:border-blue-500/20 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 mx-auto mb-3 rounded-xl bg-linear-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center group-hover:from-blue-500/30 group-hover:to-violet-500/30 transition-colors">
                      <Icon size={18} className="text-blue-400" />
                    </div>
                    <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                    <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
                  </div>
                );
              })}
            </div>

            {/* Languages */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-slate-300 font-semibold mb-4 text-sm uppercase tracking-wider">
                Langues
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Français</span>
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map(i => (
                      <div key={i} className="w-5 h-1.5 rounded-full bg-blue-500" />
                    ))}
                    <span className="text-slate-500 text-xs ml-2">Natif</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Anglais</span>
                  <div className="flex items-center gap-1">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-5 h-1.5 rounded-full bg-violet-500" />
                    ))}
                    {[4,5].map(i => (
                      <div key={i} className="w-5 h-1.5 rounded-full bg-white/10" />
                    ))}
                    <span className="text-slate-500 text-xs ml-2">Technique</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
