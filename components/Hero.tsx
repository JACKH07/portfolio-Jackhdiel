"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, Download, Mail, MapPin, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Hero() {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const words = ["Full Stack", "Backend", "Frontend", "API"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    const type = () => {
      const current = words[wordIndex];
      if (textRef.current) {
        textRef.current.textContent = isDeleting
          ? current.substring(0, charIndex--)
          : current.substring(0, charIndex++);
      }

      let delay = isDeleting ? 80 : 120;

      if (!isDeleting && charIndex === current.length + 1) {
        delay = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
      }

      setTimeout(type, delay);
    };

    const timer = setTimeout(type, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="hero-bg min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-violet-600/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-2/3 left-1/3 w-48 h-48 bg-emerald-500/6 rounded-full blur-2xl animate-pulse" style={{ animationDelay: "2s" }} />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.5) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 pb-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
              <Sparkles size={14} />
              <span>Disponible pour de nouvelles opportunités</span>
            </div>

            {/* Main Title */}
            <div>
              <p className="text-slate-400 text-lg mb-2">Bonjour, je suis</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Kouakou{" "}
                <span className="gradient-text">Jackhdiel</span>
              </h1>
              <div className="mt-3 text-2xl sm:text-3xl font-semibold text-slate-300 flex items-center gap-2 flex-wrap">
                <span>Développeur</span>
                <span className="gradient-text min-w-[140px]">
                  <span ref={textRef}>Full Stack</span>
                  <span className="animate-pulse ml-0.5 text-blue-400">|</span>
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
              Je conçois des{" "}
              <span className="text-blue-400 font-medium">applications performantes</span>,{" "}
              <span className="text-violet-400 font-medium">sécurisées</span> et{" "}
              <span className="text-emerald-400 font-medium">centrées sur l&apos;utilisateur</span>.{" "}
              2 ans d&apos;expérience en Python/Django, Node.js et intégration API.
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-slate-500 text-sm">
              <MapPin size={14} className="text-blue-400" />
              <span>Abidjan, Côte d&apos;Ivoire</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => {
                  document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold hover:from-blue-600 hover:to-violet-700 transition-all duration-200 shadow-lg hover:shadow-blue-500/30 flex items-center gap-2"
              >
                Voir mes projets
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
              </button>
              <a
                href="/cv-kouakou-jackhdiel.docx"
                download
                className="group px-6 py-3 rounded-xl border border-blue-500/30 text-blue-400 font-semibold hover:bg-blue-500/10 transition-all duration-200 flex items-center gap-2"
              >
                <Download size={16} className="group-hover:scale-110 transition-transform" />
                Télécharger mon CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/jackhdiel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
              <GithubIcon size={18} />
            </a>
            <a
              href="https://linkedin.com/in/jackhdiel-kouame"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
            >
              <LinkedinIcon size={18} />
              </a>
              <a
                href="mailto:jackhdiel.kouame@gmail.com"
                className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-200"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Right - Avatar / Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Avatar circle */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80">
                {/* Rotating gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-violet-600 to-emerald-500 animate-spin" style={{ animationDuration: "8s", padding: "3px" }}>
                  <div className="w-full h-full rounded-full bg-[#060d1b]" />
                </div>

                {/* Inner content - Photo de profil */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-[#0d1526] to-[#111827] flex items-center justify-center border border-white/5 overflow-hidden">
                  <Image
                    src="/profile.png"
                    alt="Kouakou Jackhdiel Kouame — Développeur Full Stack"
                    fill
                    className="object-cover object-top rounded-full"
                    sizes="(max-width: 640px) 272px, 304px"
                    priority
                  />
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 px-3 py-2 bg-[#0d1526] border border-blue-500/20 rounded-xl text-xs text-blue-400 font-medium shadow-lg animate-float">
                  Backend ✓
                </div>
                <div className="absolute -bottom-4 -left-4 px-3 py-2 bg-[#0d1526] border border-violet-500/20 rounded-xl text-xs text-violet-400 font-medium shadow-lg animate-float" style={{ animationDelay: "1.5s" }}>
                  API REST ✓
                </div>
                <div className="absolute top-1/2 -right-8 px-3 py-2 bg-[#0d1526] border border-emerald-500/20 rounded-xl text-xs text-emerald-400 font-medium shadow-lg animate-float" style={{ animationDelay: "3s" }}>
                  Frontend ✓
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors group"
          >
            <span className="text-xs font-medium tracking-wider uppercase">Découvrir</span>
            <ArrowDown size={16} className="animate-bounce group-hover:text-blue-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
