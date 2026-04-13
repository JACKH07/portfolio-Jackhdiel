"use client";
import { useEffect, useRef, useState } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    degree: "Master 2 Professionnel",
    field: "Informatique — Génie Logiciel",
    school: "Groupe MAAXIT Abidjan",
    period: "2024 — 2025",
    location: "Abidjan, Côte d'Ivoire",
    color: "blue",
    current: true,
  },
  {
    degree: "Master 1 Professionnel",
    field: "Informatique — Génie Logiciel",
    school: "Groupe MAAXIT Abidjan",
    period: "2023 — 2024",
    location: "Abidjan, Côte d'Ivoire",
    color: "violet",
    current: false,
  },
 
  {
    degree: "Licence 3 Professionnelle",
    field: "Informatique — Génie Logiciel",
    school: "Groupe MAAXIT Abidjan",
    period: "2022 — 2023",
    location: "Abidjan, Côte d'Ivoire",
    color: "emerald",
    current: false,
  },
  {
    degree: "BTS en IDA",
    field: "Informatique Développeur d'Application",
    school: "IIPEA — Institut International Polytechnique d'Abidjan",
    period: "2020 — 2022",
    location: "Abidjan, Côte d'Ivoire",
    color: "orange",
    current: false,
  },
  {
    degree: "Baccalauréat Série D",
    field: "Sciences de la Vie et de la Terre",
    school: "Collège Nouvelle Vision de Soubré",
    period: "2019 — 2020",
    location: "Soubré, Côte d'Ivoire",
    color: "slate",
    current: false,
  },
];

const certification = [
  {
    degree: "Certification MongoDB",
    field: "MongoDB",
    school: "alison.com",
    period: "2024 — 2025",
    location: "Abidjan, Côte d'Ivoire",
  },
  {
    degree: "Certification IA Generative",
    field: "IA Generative",
    school: "alison.com",
    period: "Du 6 avril au 13 mai 2025",
    location: "Abidjan, Côte d'Ivoire",
  },
  
];
const colorMap: Record<string, { badge: string; border: string; dot: string; line: string }> = {
  blue: {
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    border: "border-blue-500/20",
    dot: "bg-blue-500 shadow-blue-500/50",
    line: "bg-blue-500/30",
  },
  violet: {
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    border: "border-violet-500/20",
    dot: "bg-violet-500 shadow-violet-500/50",
    line: "bg-violet-500/30",
  },
  emerald: {
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    border: "border-emerald-500/20",
    dot: "bg-emerald-500 shadow-emerald-500/50",
    line: "bg-emerald-500/30",
  },
  orange: {
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    border: "border-orange-500/20",
    dot: "bg-orange-500 shadow-orange-500/50",
    line: "bg-orange-500/30",
  },
  slate: {
    badge: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    border: "border-slate-500/20",
    dot: "bg-slate-500 shadow-slate-500/50",
    line: "bg-slate-500/30",
  },
};

export default function Education() {
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
    <section id="education" className="py-24 bg-[#060d1b] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            <GraduationCap size={14} />
            <span>Formation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Parcours <span className="gradient-text">Académique</span>
          </h2>
          <p className="text-slate-500 mt-3">
            Du Baccalauréat au Master 2 en Génie Logiciel.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-violet-500/30 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {education.map((edu, i) => (
              <div
                key={i}
                className={`relative flex gap-4 sm:gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="relative flex-shrink-0 sm:block hidden">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center z-10 relative ${colorMap[edu.color].badge} border shadow-lg shadow-current`}>
                    <GraduationCap size={18} />
                  </div>
                </div>

                {/* Card */}
                <div className={`flex-1 glass-card rounded-2xl p-5 border ${colorMap[edu.color].border} hover:bg-white/3 transition-all duration-200`}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-white font-bold text-base">{edu.degree}</h3>
                        {edu.current && (
                          <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-medium">
                            En cours
                          </span>
                        )}
                      </div>
                      <p className={`text-sm font-medium mt-0.5 ${colorMap[edu.color].badge.split(" ")[1]}`}>
                        {edu.field}
                      </p>
                    </div>
                    <span className={`px-3 py-1 rounded-full border text-xs font-semibold ${colorMap[edu.color].badge}`}>
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-slate-300 text-sm font-medium mb-2">{edu.school}</p>
                  <div className="flex items-center gap-4 text-slate-500 text-xs flex-wrap">
                    <div className="flex items-center gap-1">
                      <MapPin size={10} />
                      <span>{edu.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar size={10} />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
