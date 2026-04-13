"use client";
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "kouakoujackhdielkouame@gmail.com",
    href: "mailto:kouakoujackhdielkouame@gmail.com",
    color: "blue",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "github.com/jackhdiel",
    href: "https://github.com/JACKH07",
    color: "slate",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/jackhdiel-kouame",
    href: "https://linkedin.com/in/jackhdiel-kouame",
    color: "blue",
  },
  {
    icon: Phone,
    label: "WhatsApp",
    value: "+225 07 87 59 43 38",
    href: "https://wa.me/2250787594338",
    color: "emerald",
  },
];

const colorMap: Record<string, { badge: string; border: string }> = {
  blue: {
    badge: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    border: "border-blue-500/20 hover:border-blue-500/40",
  },
  slate: {
    badge: "bg-slate-500/10 text-slate-400 border-slate-500/20",
    border: "border-slate-500/20 hover:border-slate-500/40",
  },
  emerald: {
    badge: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    border: "border-emerald-500/20 hover:border-emerald-500/40",
  },
};

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-[#0a1120] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent pointer-events-none" />
      <div ref={ref} className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium mb-4">
            <MessageSquare size={14} />
            <span>Contact</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Travaillons <span className="gradient-text">Ensemble</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-xl mx-auto">
            Disponible pour des opportunités full-time, des missions freelance ou des collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left - Contact info */}
          <div className={`space-y-6 transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="glass-card rounded-2xl p-6 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={16} className="text-blue-400" />
                <div>
                  <p className="text-white font-semibold">Abidjan, Côte d&apos;Ivoire</p>
                  <p className="text-slate-500 text-sm">Disponible à distance (remote)</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-slate-400 text-sm">Disponible pour de nouvelles opportunités</span>
              </div>
            </div>

            {contactLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-4 glass-card rounded-xl border ${colorMap[link.color].border} transition-all duration-200 group`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${colorMap[link.color].badge} group-hover:scale-110 transition-transform`}>
                    <Icon size={16} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-xs">{link.label}</p>
                    <p className="text-slate-200 text-sm font-medium group-hover:text-white transition-colors">
                      {link.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Right - Form */}
          <div className={`transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            <div className="glass-card rounded-2xl p-6 border border-white/5">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                    <CheckCircle2 size={32} className="text-emerald-400" />
                  </div>
                  <h3 className="text-white font-bold text-xl">Message envoyé !</h3>
                  <p className="text-slate-400 max-w-xs">
                    Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-4 px-6 py-2 rounded-lg text-sm font-medium text-blue-400 border border-blue-500/20 hover:bg-blue-500/10 transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-white font-semibold mb-4">Envoyer un message</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-400 text-xs mb-1.5 font-medium">
                        Nom <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-400 text-xs mb-1.5 font-medium">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs mb-1.5 font-medium">
                      Sujet
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="Proposition de mission, collaboration..."
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-400 text-xs mb-1.5 font-medium">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Décrivez votre projet ou votre besoin..."
                      className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-blue-500/50 focus:bg-white/8 transition-all resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-red-400 text-xs">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold hover:from-blue-600 hover:to-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-blue-500/25"
                  >
                    {sending ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Envoyer le message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
