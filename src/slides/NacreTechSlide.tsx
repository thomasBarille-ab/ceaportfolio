import { useState } from 'react'
import SlideLayout from '../components/SlideLayout'

const techStack = [
  { name: 'React', color: '#61dafb' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Loopback', color: '#10b981' },
  { name: 'Electron', color: '#9feaf9' },
  { name: 'JSON', color: '#f59e0b' },
]

const screenshots = [
  {
    src: '/images/p13_img01.jpeg',
    label: 'Carte de France interactive',
    desc: 'SVG zoomable — réseau électrique actuel avec étapes de contextualisation',
  },
  {
    src: '/images/p14_img01.jpeg',
    label: 'Simulation terminée',
    desc: 'Architecture 3D animée avec contrôleurs, transport d\'électricité et lignes de communication',
  },
  {
    src: '/images/p14_img02.jpeg',
    label: 'Résultat de simulation',
    desc: '75% de perte de messages sur contrôleur zonal — statut détaillé des anomalies',
  },
]

export default function NacreTechSlide() {
  const [active, setActive] = useState(0)

  return (
    <SlideLayout accent="#10b981">
      <div className="flex-1 min-h-0 flex gap-6">

        {/* Panneau gauche — toutes les infos */}
        <div className="w-56 shrink-0 flex flex-col gap-4">

          {/* Titre */}
          <div className="shrink-0">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-500/15 text-green-400 border border-green-500/30">
              Projet 1 / 3
            </span>
            <h2 className="text-xl font-bold text-white mt-3 leading-tight">NACRE</h2>
            <p className="text-slate-400 text-xs mt-1 leading-relaxed">Démonstrateur de simulation du réseau électrique</p>
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
                    background: i === active ? 'rgba(16,185,129,0.1)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${i === active ? 'rgba(16,185,129,0.4)' : 'rgba(255,255,255,0.08)'}`,
                  }}
                >
                  <span className="text-xs font-mono font-bold shrink-0" style={{ color: i === active ? '#10b981' : '#475569' }}>
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
        <div className="flex-1 min-h-0 rounded-2xl overflow-hidden border border-green-500/20 flex flex-col" style={{ background: '#0d1117' }}>
          {/* Chrome bar */}
          <div className="shrink-0 flex items-center gap-2 px-4 py-2.5 border-b border-white/8">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            <span className="text-xs text-slate-600 ml-2">NACRE · Electron</span>
          </div>

          {/* Image — centrée, ratio préservé, jamais déformée */}
          <div className="flex-1 min-h-0 flex items-center justify-center p-4" style={{ background: '#0d1117' }}>
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
