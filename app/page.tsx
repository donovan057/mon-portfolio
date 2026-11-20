"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 overflow-hidden relative selection:bg-purple-200">

      {/* --- DÉGRADÉS DE FOND ---*/}
      <div className="absolute top-0 left-0 w-full h-[600px] overflow-hidden -z-10 pointer-events-none">
        <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[70%] bg-purple-300/40 blur-[120px] rounded-full"></div>
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[70%] bg-blue-300/40 blur-[120px] rounded-full"></div>
      </div>

      {/* --- NAVBAR ---*/}
      <nav className="flex items-center justify-between px-6 md:px-8 py-6 max-w-7xl mx-auto">
        <div className="text-xl font-bold flex items-center gap-2">
          <span className="text-blue-600 text-2xl">✦</span>Donovan Rinquebach
        </div>
        <div className="hiden md:flex gap-6 text-sm font-medium text-slate-600">
          <a href="#projets" className="hover:text-slate-900 transition-colors">Projets</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#contact" className="bg-[#635BFF] hover:bg-[#524be0] text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-lg shadow-purple-500/30 transition-all hover:-translate-y-0.5">
            Me contacter
          </a>
        </div>
      </nav>


      {/* --- SECTION HERO ---*/}
      <section className="pt-20 pb-24 px-4 text-center max-w-4xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y:  20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-medium text-slate-600 mb-8">
            <span className="text-blue-500">✦</span> Développeur Web Freelance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6 text-slate-900"
          >
            Je crée des sites <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500">modernes</span><br />
            et <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">sur-mesure</span>.
          </motion.h1>

          <motion.p
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
          </motion.p>
      </section>

      {/* --- MAQUETTE 3D (Tableau de bord) ---*/}
      <motion.section
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y:0, scale: 1 }}
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
                <p className="text-2xl font-bold text-blue-600">Next.js</p>
              </div>
            </div>

            {/* --- Faux graphique animé ---*/}
            <div className="flex items-end gap-2 h-32 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
              {[40, 70, 45, 90, 60, 100, 80].map((height, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${height}%` }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2 + (i * 0.1),
                    type: "spring",
                    bounce: 0.4
                  }}
                  className="flex-1 bg-gradient-to-t from-blue-400 to-blue-300 rounded-t-md"
                />
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* --- SECTION PROJETS --- */}
      <section id="projets" className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mes derniers projets</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Des interfaces modernes, rapides et pensées pour l'utilisateur.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* PROJET 1 - EN CONSTRUCTION */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Zone image "En construction" */}
            <div className="h-64 bg-slate-50 relative overflow-hidden flex flex-col items-center justify-center border-b border-slate-100">
               {/* Effet de grille technique en fond */}
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
               
               {/* Icône d'engrenage ou de code animée */}
               <div className="relative z-10 flex flex-col items-center gap-3">
                 <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600 animate-spin-slow">
                     <path d="M12 2v4"/><path d="m16.2 7.8 2.9-2.9"/><path d="M18 12h4"/><path d="m16.2 16.2 2.9 2.9"/><path d="M12 18v4"/><path d="m4.9 19.1 2.9-2.9"/><path d="M2 12h4"/><path d="m4.9 4.9 2.9 2.9"/>
                   </svg>
                 </div>
                 <span className="bg-white/80 backdrop-blur-sm text-slate-600 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                   🚧 En cours de construction
                 </span>
               </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 flex items-center justify-between text-slate-800">
                Site Vitrine - Architecte
                <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-1 rounded-md">En dev</span>
              </h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Refonte complète d'un site pour un cabinet d'architecture. Focus sur la fluidité, la typographie et le responsive.
              </p>
              <div className="flex gap-2 mt-auto">
                <span className="text-xs font-semibold bg-blue-50 text-blue-600 px-3 py-1 rounded-full">Next.js</span>
                <span className="text-xs font-semibold bg-purple-50 text-purple-600 px-3 py-1 rounded-full">Tailwind</span>
              </div>
            </div>
          </motion.div>

          {/* PROJET 2 - EN CONSTRUCTION */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
          >
            {/* Zone image "En construction" */}
            <div className="h-64 bg-slate-50 relative overflow-hidden flex flex-col items-center justify-center border-b border-slate-100">
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30"></div>
               
               <div className="relative z-10 flex flex-col items-center gap-3">
                 <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600 animate-pulse">
                     <polyline points="16 18 22 12 16 6"/>
                     <polyline points="8 6 2 12 8 18"/>
                   </svg>
                 </div>
                 <span className="bg-white/80 backdrop-blur-sm text-slate-600 text-xs font-bold px-3 py-1.5 rounded-full border border-slate-200 shadow-sm">
                   🚧 En cours de construction
                 </span>
               </div>
            </div>
            
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold mb-2 flex items-center justify-between text-slate-800">
                Application de Gestion
                <span className="text-xs font-semibold bg-amber-100 text-amber-700 px-2 py-1 rounded-md">En dev</span>
              </h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">
                Interface intuitive pour organiser ses projets. Système de glisser-déposer et mise à jour en temps réel.
              </p>
              <div className="flex gap-2 mt-auto">
                <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">React</span>
                <span className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">Framer Motion</span>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* --- SECTION CONTACT --- */}
      <section id="contact" className="py-24 px-4 bg-slate-900 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Un projet en tête</h2>
          <p className="text-slate-400 mb-10 text-lg">
            Discutons de vos besoins. Je vous réponds sous 24H pour évaluer votre projet et vous proposer une solution adaptée.
          </p>
          <a
            href="mailto:donovanrinquebach25@icloud.com"
            className="inline-flex items-center gap-2 bg-white text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 transition-colors"
          >
            <Mail className="w-5 h-5" /> M'envoyer un email
          </a>

          <div className="mt-12 flex items-center justify-center gap-6">
            <a
              href="https://github.com/donovan057"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" /> Mon GitHub
            </a>
            <a
              href="https://linkedin.com/in/donovan-rinquebach"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
            >
              <ExternalLink className="w-4 h-4" /> Mon LinkedIn
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}