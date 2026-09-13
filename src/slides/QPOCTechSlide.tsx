import { useState } from 'react'
import SlideLayout from '../components/SlideLayout'

const techStack = [
  { name: 'React Flow', color: '#f59e0b' },
  { name: 'Yeoman', color: '#f59e0b' },
  { name: 'Node.js', color: '#10b981' },
  { name: 'OpenStack', color: '#ef4444' },
  { name: 'Kubernetes', color: '#3b82f6' },
  { name: 'CI/CD', color: '#8b5cf6' },
]

const screenshots = [
  {
    src: '/images/p32_img02.png',
    label: 'Home Page',
    desc: 'Nommer le projet — accès aux projets existants et documentation',
  },
  {
    src: '/images/p33_img01.jpeg',
    label: 'Choix du type',
    desc: 'Sélection : Applicatif / Réseau / Applicatif & Réseau',
  },
  {
    src: '/images/p34_img01.png',
    label: 'React Flow — Technos',
    desc: 'Drag & Drop : Front, Back, BDD, déploiement, versioning',
  },
  {
    src: '/images/p34_img02.png',
    label: 'Récapitulatif',
    desc: 'Résumé avant génération — vérification des choix et lancement',
  },
]

export default function QPOCTechSlide() {
  const [active, setActive] = useState(0)

  return (
    <SlideLayout accent="#f59e0b">
      <div className="flex-1 min-h-0 flex gap-6">

        {/* Panneau gauche — toutes les infos */}
        <div className="w-56 shrink-0 flex flex-col gap-4">

          {/* Titre */}
          <div className="shrink-0">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">
              Projet 2 / 3
            </span>
            <h2 className="text-xl font-bold text-white mt-3 leading-tight">Quick POC</h2>
            <p className="text-slate-400 text-xs mt-1 leading-relaxed">Générateur intelligent de projets POC</p>
          </div>

          {/* Stack */}
          <div className="shrink-0">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Stack</p>
            <div className="flex flex-wrap gap-1.5">
              {techStack.map(t => (
                <span
                  key={t.name}
                  className="text-xs font-semibold px-2 py-0.5 rounded-md"
                  style={{ color: t.color, background: `${t.color}15`, border: `1px solid ${t.color}30` }}
                >
                  {t.name}
                </span>
              ))}
            </div>
          </div>

          {/* Séparateur */}
          <div className="shrink-0 h-px bg-white/10" />

          {/* Description de la capture active */}
          <div className="shrink-0">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Vue actuelle</p>
            <p className="text-sm font-semibold text-white leading-snug">{screenshots[active].label}</p>
            <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">{screenshots[active].desc}</p>
          </div>

          {/* Séparateur */}
          <div className="shrink-0 h-px bg-white/10" />

          {/* Navigation */}
          <div className="shrink-0">
            <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Captures</p>
            <div className="flex flex-col gap-2">
              {screenshots.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all"
                  style={{
                    background: i === active ? 'rgba(245,158,11,0.1)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${i === active ? 'rgba(245,158,11,0.4)' : 'rgba(255,255,255,0.08)'}`,
                  }}
                >
                  <span className="text-xs font-mono font-bold shrink-0" style={{ color: i === active ? '#f59e0b' : '#475569' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs truncate" style={{ color: i === active ? '#e2e8f0' : '#64748b' }}>
                    {s.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Zone image — prend tout l'espace restant */}
        <div className="flex-1 min-h-0 rounded-2xl overflow-hidden border border-amber-500/20 flex flex-col">
          {/* Chrome bar */}
          <div className="shrink-0 flex items-center gap-2 px-4 py-2.5 border-b border-black/10" style={{ background: '#f1f3f5' }}>
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            <span className="text-xs text-slate-400 ml-2">Quick POC · Web</span>
          </div>

          {/* Image — centrée, ratio préservé, jamais déformée */}
          <div className="flex-1 min-h-0 flex items-center justify-center p-4" style={{ background: '#ffffff' }}>
            <img
              key={active}
              src={screenshots[active].src}
              alt={screenshots[active].label}
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
            />
          </div>
        </div>

      </div>
    </SlideLayout>
  )
}
