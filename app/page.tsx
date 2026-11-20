"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail, ExternalLink, Code2, MonitorSmartphone, Rocket, CheckCircle2 } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-hidden relative selection:bg-purple-200">
      
      {/* --- DÉGRADÉS DE FOND --- */}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[70%] bg-purple-300/40 blur-[120px] rounded-full"></div>
        <div className="absolute top-[10%] -right-[10%] w-[50%] h-[70%] bg-blue-300/40 blur-[120px] rounded-full"></div>
      </div>

      {/* --- NAVBAR --- */}
      <nav className="flex items-center justify-between px-6 md:px-8 py-6 max-w-7xl mx-auto">
        <div className="text-xl font-bold flex items-center gap-2">
          <span className="text-blue-600 text-2xl">✦</span> Donovan R.
        </div>
        <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
          <a href="#services" className="hover:text-slate-900 transition-colors">Services</a>
          <a href="#projets" className="hover:text-slate-900 transition-colors">Projets</a>
          <a href="#apropos" className="hover:text-slate-900 transition-colors">À propos</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#contact" className="bg-[#635BFF] hover:bg-[#524be0] text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-purple-500/30 transition-all hover:-translate-y-0.5">
            Me contacter
          </a>
        </div>
      </nav>

      {/* --- SECTION HERO --- */}
      <section className="pt-20 pb-24 px-4 text-center max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-medium text-slate-600 mb-8"
        >
          <span className="text-blue-500">✦</span> Disponible pour de nouvelles missions
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900"
        >
          Je crée des sites <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">modernes</span><br />
          et <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">sur-mesure</span>.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10"
        >
          Spécialisé dans la création d'interfaces rapides, animées et optimisées pour convertir vos visiteurs en clients.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projets" className="w-full sm:w-auto bg-[#635BFF] hover:bg-[#524be0] text-white px-8 py-3.5 rounded-xl font-semibold shadow-xl shadow-purple-500/30 transition-all hover:-translate-y-1">
            Voir mes projets
          </a>
          <a href="#contact" className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 px-8 py-3.5 rounded-xl font-semibold shadow-sm transition-all flex items-center justify-center gap-2">
            Discuter de votre projet <ArrowDown className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      {/* --- MAQUETTE 3D (Tableau de bord) --- */}
      <motion.section 
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative max-w-5xl mx-auto px-4 -mt-10 z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-blue-100 to-transparent blur-2xl -z-10 rounded-full h-1/2 top-1/2"></div>
        
        <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden">
          <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-400"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-400"></div>
          </div>
          
          <div className="p-6 md:p-8 bg-slate-50/50">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-lg font-bold text-slate-800">📊 Aperçu de mon travail</h3>
              <span className="bg-green-100 text-green-700 text-xs font-bold px-2.5 py-1 rounded-full">● Prêt pour vous</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <p className="text-sm text-slate-500 mb-1">Performance</p>
                <p className="text-2xl font-bold text-blue-600">100/100</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <p className="text-sm text-slate-500 mb-1">Responsive</p>
                <p className="text-2xl font-bold text-blue-600">Mobile first</p>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
                <p className="text-sm text-slate-500 mb-1">Technologie</p>
                <p className="text-2xl font-bold text-slate-800">Next.js</p>
              </div>
            </div>

            <div className="flex items-end gap-2 h-32 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              {[40, 70, 45, 90, 60, 100, 80].map((height, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + (i * 0.1), type: "spring", bounce: 0.4 }}
                  className="flex-1 bg-gradient-to-t from-blue-400 to-blue-300 rounded-t-md"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* --- SECTION SERVICES --- */}
      <section id="services" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mon expertise à votre service</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Des solutions concrètes pour développer votre présence en ligne et automatiser vos processus.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: MonitorSmartphone, title: "Création de site vitrine", desc: "Un site moderne, rapide et responsive pour présenter votre activité et attirer de nouveaux clients." },
            { icon: Code2, title: "Application Web sur-mesure", desc: "Développement d'outils métiers, de tableaux de bord ou d'espaces clients adaptés à vos besoins." },
            { icon: Rocket, title: "Optimisation & Refonte", desc: "Amélioration des performances, du SEO et du design de votre site existant pour maximiser vos conversions." }
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION PROJETS --- */}
      <section id="projets" className="py-24 px-4 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes derniers projets</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Des interfaces modernes, rapides et pensées pour l'utilisateur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* PROJET 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-64 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100"></div>
                <span className="relative text-slate-400 font-medium text-sm">Aperçu du projet (Image)</span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-slate-800">Site Vitrine - Architecte</h3>
                <p className="text-sm text-slate-500 mb-6 flex-grow">
                  Refonte complète d'un site pour un cabinet d'architecture. Focus sur la fluidité, la typographie et le responsive.
                </p>
                <div className="flex gap-2 mb-6">
                  <span className="text-xs font-semibold bg-blue-50 text-blue-600 px-3 py-1 rounded-full">Next.js</span>
                  <span className="text-xs font-semibold bg-purple-50 text-purple-600 px-3 py-1 rounded-full">Tailwind</span>
                </div>
                <div className="flex gap-3 mt-auto">
                  <a href="#" className="flex-1 bg-slate-900 hover:bg-slate-800 text-white text-center py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" /> Voir la démo
                  </a>
                  <a href="#" className="flex-1 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-center py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    <Code2 className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </motion.div>

            {/* PROJET 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              <div className="h-64 bg-slate-100 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100"></div>
                <span className="relative text-slate-400 font-medium text-sm">Aperçu du projet (Image)</span>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-slate-800">Application de Gestion</h3>
                <p className="text-sm text-slate-500 mb-6 flex-grow">
                  Interface intuitive pour organiser ses projets. Système de glisser-déposer et mise à jour en temps réel.
                </p>
                <div className="flex gap-2 mb-6">
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">React</span>
                  <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">Framer Motion</span>
                </div>
                <div className="flex gap-3 mt-auto">
                  <a href="#" className="flex-1 bg-slate-900 hover:bg-slate-800 text-white text-center py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" /> Voir la démo
                  </a>
                  <a href="#" className="flex-1 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-center py-2 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
                    <Code2 className="w-4 h-4" /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- SECTION À PROPOS --- */}
      <section id="apropos" className="py-24 px-4 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-1/3"
          >
            {/* Remplacer par ta photo plus tard */}
            <div className="aspect-square bg-slate-100 rounded-3xl border border-slate-200 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100"></div>
              <span className="relative text-slate-400 font-medium">Votre photo</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full md:w-2/3"
          >
            <h2 className="text-3xl font-bold mb-6">Enchanté, je suis Donovan 👋</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Développeur web freelance, je me passionne pour la création d'interfaces qui allient design épuré et performance technique. Mon objectif est simple : transformer vos idées en outils digitaux qui vous rapportent des clients.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Ma méthode de travail est transparente et collaborative. Nous définissons ensemble vos besoins, je vous livre des maquettes avant de coder, et je vous accompagne jusqu'à la mise en ligne.
            </p>
            <div className="flex flex-wrap gap-4">
              {["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Framer Motion"].map((tech, i) => (
                <span key={i} className="flex items-center gap-1.5 text-sm font-medium text-slate-700 bg-slate-100 px-3 py-1.5 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" /> {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- SECTION CONTACT --- */}
      <section id="contact" className="py-24 px-4 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Discutons de votre projet</h2>
            <p className="text-slate-400 text-lg max-w-xl mx-auto">
              Que vous ayez une idée précise ou juste une ébauche, je vous réponds sous 24h pour évaluer vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulaire */}
            <form className="space-y-4 bg-slate-800 p-8 rounded-2xl border border-slate-700">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Nom</label>
                <input type="text" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Votre nom" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Email</label>
                <input type="email" className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="vous@exemple.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Message</label>
                <textarea rows={4} className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Décrivez votre projet..."></textarea>
              </div>
              <button type="button" className="w-full bg-[#635BFF] hover:bg-[#524be0] text-white py-3 rounded-lg font-semibold transition-colors">
                Envoyer le message
              </button>
            </form>

            {/* Liens directs */}
            <div className="flex flex-col justify-center space-y-6 md:pl-8">
              <a href="mailto:contact@donovan-r.com" className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-slate-700">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Par email</p>
                  <p className="font-medium text-white">contact@donovan-r.com</p>
                </div>
              </a>
              <a href="https://github.com/donovan057" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-slate-700">
                  <Code2 className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Mon code</p>
                  <p className="font-medium text-white">GitHub / donovan057</p>
                </div>
              </a>
              <a href="https://linkedin.com/in/donovan-rinquebach" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800 transition-colors group">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center group-hover:bg-slate-700">
                  <ExternalLink className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Mon réseau</p>
                  <p className="font-medium text-white">LinkedIn</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-slate-950 py-8 text-center border-t border-slate-800">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Donovan Rinquebach. Tous droits réservés.
        </p>
      </footer>

    </main>
  );
}