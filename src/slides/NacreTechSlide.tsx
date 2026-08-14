import { useState } from 'react'
import SlideLayout from '../components/SlideLayout'

const techStack = [
  { name: 'React', sub: 'TypeScript', color: '#61dafb', icon: '⚛️' },
  { name: 'Loopback', sub: 'Backend API', color: '#10b981', icon: '🔧' },
  { name: 'Electron', sub: 'Packaging', color: '#9feaf9', icon: '📦' },
  { name: 'JSON', sub: 'Stockage scénarios', color: '#f59e0b', icon: '🗄️' },
]

const screenshots = [
  { src: '/images/p13_img01.jpeg', label: 'Carte de France interactive', desc: 'SVG zoomable — réseau électrique actuel avec étapes de contextualisation' },
  { src: '/images/p14_img01.jpeg', label: 'Simulation terminée', desc: 'Architecture 3D animée avec contrôleurs, transport d\'électricité et lignes de communication' },
  { src: '/images/p14_img02.jpeg', label: 'Résultat de la simulation', desc: '75% de perte de messages sur contrôleur zonal — statut détaillé des anomalies' },
]

export default function NacreTechSlide() {
  const [active, setActive] = useState(0)

  return (
    <SlideLayout accent="#10b981">
      <div className="animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <span className="tag bg-green-500/20 text-green-400 border border-green-500/30">Projet 1 / 3</span>
          <span className="text-slate-500 text-sm">Réalisations techniques</span>
        </div>
        <h2 className="text-4xl font-bold text-white mb-1">NACRE — Interfaces réalisées</h2>
        <p className="text-slate-400">Démonstrateur de simulation du réseau électrique</p>
      </div>

      <div className="flex gap-8 flex-1 mt-6">
        {/* Left: stack + features */}
        <div className="w-64 flex flex-col gap-4 animate-slide-right">
          <div className="flex flex-col gap-2">
            {techStack.map((t) => (
              <div key={t.name} className="card border-green-500/20 flex items-center gap-3 py-2">
                <span className="text-xl">{t.icon}</span>
                <div>
                  <span className="font-semibold text-sm" style={{ color: t.color }}>{t.name}</span>
                  <span className="text-xs text-slate-500 ml-1.5">{t.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Screenshot selector */}
          <div className="flex flex-col gap-2 flex-1">
            <p className="text-xs text-slate-500 uppercase tracking-wider">Écrans du démonstrateur</p>
            {screenshots.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left p-3 rounded-xl border transition-all text-xs ${
                  active === i
                    ? 'border-green-500/60 bg-green-500/10 text-white'
                    : 'border-white/10 bg-white/5 text-slate-400 hover:border-green-500/30'
                }`}
              >
                <span className={`font-medium block mb-0.5 ${active === i ? 'text-green-400' : ''}`}>
                  {String(i + 1).padStart(2, '0')} · {s.label}
                </span>
                <span className="leading-relaxed opacity-80">{s.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: screenshot display */}
        <div className="flex-1 animate-slide-left">
          <div className="card border-green-500/30 h-full p-0 overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400"/>
                <div className="w-2 h-2 rounded-full bg-amber-400"/>
                <div className="w-2 h-2 rounded-full bg-green-400"/>
                <span className="text-xs text-slate-500 ml-2">NACRE · {screenshots[active].label}</span>
              </div>
              <div className="flex gap-1">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="w-4 h-4 rounded-full border transition-all"
                    style={{
                      background: i === active ? '#10b981' : 'transparent',
                      borderColor: i === active ? '#10b981' : 'rgba(255,255,255,0.2)',
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="flex-1 overflow-hidden">
              <img
                key={active}
                src={screenshots[active].src}
                alt={screenshots[active].label}
                className="w-full h-full object-cover object-top animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
