"use client";
import { useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { Layers, Cpu } from "lucide-react";
import pythonLogo from "@/assets/Python-logo-notext.svg.png";
import djangoLogo from "@/assets/django.png";
import nodeLogo from "@/assets/node.js.png";
import jsLogo from "@/assets/JavaScript.png";
import angularLogo from "@/assets/angular.jpeg";
import mysqlLogo from "@/assets/MySQL.png";
import mongoLogo from "@/assets/MongoDB.png";
import gitLogo from "@/assets/Git.jpeg";

const skillCategories = [
  {
    title: "Backend",
    color: "blue",
    skills: [
      { name: "Python / Django", level: 85, years: "3 ans" },
      { name: "Node.js / Express", level: 80, years: "1 an" },
      { name: "API REST / Intégration", level: 88, years: "2 ans" },
    ],
  },
  {
    title: "Frontend",
    color: "violet",
    skills: [
      { name: "JavaScript", level: 82, years: "2 ans" },
      { name: "React Native", level: 75, years: "1 an" },
      { name: "HTML / CSS", level: 85, years: "5 ans" },
    ],
  },
  {
    title: "Base de données",
    color: "emerald",
    skills: [
      { name: "MySQL / PhpMyAdmin", level: 82, years: "4 ans" },
      { name: "MongoDB", level: 65, years: "1 an" },
      { name: "SQL (CRUD)", level: 80, years: "4 ans" },
    ],
  },
  {
    title: "Outils & Méthodes",
    color: "orange",
    skills: [
      { name: "Git / GitLab", level: 82, years: "2 ans" },
      { name: "Postman", level: 88, years: "2 ans" },
      { name: "VS Code / Cursor", level: 90, years: "2 ans" },
      { name: "WSO2 Integration Studio", level: 60, years: "1 an" },
      { name: "Windows / Linux", level: 80, years: "2 ans" },
    ],
  },
];

const techStack: { name: string; src: StaticImageData; alt: string }[] = [
  { name: "Python", src: pythonLogo, alt: "Logo Python" },
  { name: "Django", src: djangoLogo, alt: "Logo Django" },
  { name: "Node.js", src: nodeLogo, alt: "Logo Node.js" },
  { name: "JavaScript", src: jsLogo, alt: "Logo JavaScript" },
  { name: "Angular", src: angularLogo, alt: "Logo Angular" },
  { name: "MySQL", src: mysqlLogo, alt: "Logo MySQL" },
  { name: "MongoDB", src: mongoLogo, alt: "Logo MongoDB" },
  { name: "Git", src: gitLogo, alt: "Logo Git" },
];

const colorMap: Record<string, { bar: string; badge: string; border: string }> = {
  blue: {
    bar: "from-blue-500 to-blue-700",
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    border: "border-blue-500/20 hover:border-blue-500/40",
  },
  violet: {
    bar: "from-violet-500 to-violet-700",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    border: "border-violet-500/20 hover:border-violet-500/40",
  },
  emerald: {
    bar: "from-emerald-500 to-emerald-700",
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
  },
  orange: {
    bar: "from-orange-500 to-orange-700",
    badge: "bg-orange-500/10 text-orange-400 border-orange-500/20",
    border: "border-orange-500/20 hover:border-orange-500/40",
  },
};

function SkillBar({ level, color, animate }: { level: number; color: string; animate: boolean }) {
  return (
    <div className="relative h-1.5 bg-white/5 rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full bg-linear-to-r ${colorMap[color].bar} transition-all duration-1000 ease-out`}
        style={{ width: animate ? `${level}%` : "0%" }}
      />
    </div>
  );
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          setTimeout(() => setAnimate(true), 200);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 bg-[#0a1120] relative">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-violet-950/5 to-transparent pointer-events-none" />
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm font-medium mb-4">
            <Layers size={14} />
            <span>Compétences</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Stack <span className="gradient-text">Technique</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Mes technologies de prédilection pour construire des applications robustes.
          </p>
        </div>

        {/* Tech stack — logos depuis /assets */}
        <div className={`flex flex-wrap justify-center gap-4 sm:gap-5 mb-16 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {techStack.map((tech, i) => (
            <div
              key={tech.name}
              className="group flex flex-col items-center gap-2 cursor-default"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white/6 border border-white/10 p-2 shadow-lg group-hover:scale-110 group-hover:border-blue-500/30 group-hover:shadow-blue-500/10 transition-all duration-200">
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  fill
                  sizes="72px"
                  className="object-contain p-1"
                />
              </div>
              <span className="text-slate-500 text-xs font-medium">{tech.name}</span>
            </div>
          ))}
        </div>

        {/* Skill categories */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-6 border ${colorMap[cat.color].border} transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center border ${colorMap[cat.color].badge}`}>
                  <Cpu size={14} />
                </div>
                <h3 className="text-white font-semibold">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-slate-300 text-sm font-medium">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${colorMap[cat.color].badge}`}>
                          {skill.years}
                        </span>
                        <span className="text-slate-500 text-xs">{skill.level}%</span>
                      </div>
                    </div>
                    <SkillBar level={skill.level} color={cat.color} animate={animate} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
