import { useState } from 'react'
import SlideLayout from '../components/SlideLayout'

const techStack = [
  { name: 'React', color: '#61dafb' },
  { name: 'TypeScript', color: '#3178c6' },
  { name: 'Loopback', color: '#34d399' },
  { name: 'Electron', color: '#9feaf9' },
  { name: 'JSON', color: '#fbbf24' },
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
    <SlideLayout accent="#34d399">
      <div className="flex-1 min-h-0 flex gap-6">

        {/* Panneau gauche */}
        <div className="w-56 shrink-0 flex flex-col gap-4">

          <div className="shrink-0">
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
              Projet 1 / 3
            </span>
            <h2 className="text-xl font-bold text-white mt-3 leading-tight">NACRE</h2>
            <p className="text-stone-400 text-xs mt-1 leading-relaxed">Démonstrateur de simulation du réseau électrique</p>
          </div>

          <div className="shrink-0">
            <p className="text-xs text-stone-500 uppercase tracking-wider mb-2">Stack</p>
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

          <div className="shrink-0 h-px bg-white/10" />

          <div className="shrink-0">
            <p className="text-xs text-stone-500 uppercase tracking-wider mb-2">Vue actuelle</p>
            <p className="text-sm font-semibold text-white leading-snug">{screenshots[active].label}</p>
            <p className="text-xs text-stone-400 mt-1.5 leading-relaxed">{screenshots[active].desc}</p>
          </div>

          <div className="shrink-0 h-px bg-white/10" />

          <div className="shrink-0">
            <p className="text-xs text-stone-500 uppercase tracking-wider mb-2">Captures</p>
            <div className="flex flex-col gap-2">
              {screenshots.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all"
                  style={{
                    background: i === active ? 'rgba(52,211,153,0.1)' : 'rgba(255,255,255,0.03)',
                    border: `1px solid ${i === active ? 'rgba(52,211,153,0.4)' : 'rgba(255,255,255,0.08)'}`,
                  }}
                >
                  <span className="text-xs font-mono font-bold shrink-0" style={{ color: i === active ? '#34d399' : '#57534e' }}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-xs truncate" style={{ color: i === active ? '#e7e5e4' : '#78716c' }}>
                    {s.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Zone image */}
        <div className="flex-1 min-h-0 rounded-2xl overflow-hidden border border-emerald-500/20 flex flex-col" style={{ background: '#0d1117' }}>
          <div className="shrink-0 flex items-center gap-2 px-4 py-2.5 border-b border-white/8">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
            <span className="text-xs text-stone-600 ml-2">NACRE · Electron</span>
          </div>
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
