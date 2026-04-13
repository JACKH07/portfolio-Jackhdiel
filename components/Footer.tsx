import { Code2, Mail, Heart } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#030810] border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg">
              <Code2 size={16} className="text-white" />
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Kouakou Jackhdiel Kouame</p>
              <p className="text-slate-500 text-xs">Développeur Full Stack</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/jackhdiel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <GithubIcon size={16} />
            </a>
            <a
              href="https://linkedin.com/in/jackhdiel-kouame"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <LinkedinIcon size={16} />
            </a>
            <a
              href="mailto:jackhdiel.kouame@gmail.com"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all"
            >
              <Mail size={16} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-slate-600 text-xs flex items-center gap-1">
            © {year} Conçu avec <Heart size={10} className="text-red-500 fill-red-500" /> par Jackhdiel
          </p>
        </div>
      </div>
    </footer>
  );
}
