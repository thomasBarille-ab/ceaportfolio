import { useState } from 'react'
import SlideLayout from '../components/SlideLayout'

const screenshots = [
  { src: '/images/p32_img02.png',   label: '01 · Home Page',           desc: 'Nommer le projet — accès projets existants et documentation' },
  { src: '/images/p33_img01.jpeg',  label: '02 · Choix du type',       desc: 'Applicatif / Réseau / Applicatif & Réseau' },
  { src: '/images/p34_img01.png',   label: '03 · React Flow — Technos', desc: 'Drag & Drop des technologies : Front, Back, BDD, déploiement, versioning' },
  { src: '/images/p34_img02.png',   label: '04 · Récapitulatif',       desc: 'Résumé avant génération — vérification des choix et lancement' },
]

const arch = [
  { layer: 'Interface', items: ['React Flow (DnD)', 'Documentation', 'Gestion projets'] },
  { layer: 'Générateurs', items: ['Yeoman (Front/Back)', 'Schéma UML', 'DigiDeploy'] },
  { layer: 'Infra', items: ['OpenStack', 'Kubernetes', 'CI/CD'] },
]

export default function QPOCTechSlide() {
  const [active, setActive] = useState(0)

  return (
    <SlideLayout accent="#f59e0b">
      <div className="animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <span className="tag bg-amber-500/20 text-amber-400 border border-amber-500/30">Projet 2 / 3</span>
          <span className="text-slate-500 text-sm">Réalisations techniques</span>
        </div>
        <h2 className="text-4xl font-bold text-white mb-1">Quick POC — Interfaces réalisées</h2>
        <p className="text-slate-400">Générateur intelligent de projets POC</p>
      </div>

      <div className="flex gap-8 flex-1 mt-6">
        {/* Left: architecture + screen selector */}
        <div className="w-64 flex flex-col gap-3 animate-slide-right">
          <div className="card border-amber-500/20">
            <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2">Architecture technique</p>
            <div className="space-y-2">
              {arch.map(({ layer, items }) => (
                <div key={layer}>
                  <p className="text-xs text-slate-500 mb-1">{layer}</p>
                  <div className="flex flex-wrap gap-1">
                    {items.map(it => (
                      <span key={it} className="text-xs text-slate-300 bg-white/5 border border-white/10 rounded px-1.5 py-0.5">{it}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-slate-500 uppercase tracking-wider mt-1">Parcours utilisateur</p>
          <div className="flex flex-col gap-2 flex-1">
            {screenshots.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`text-left p-2.5 rounded-xl border transition-all text-xs ${
                  active === i
                    ? 'border-amber-500/60 bg-amber-500/10 text-white'
                    : 'border-white/10 bg-white/5 text-slate-400 hover:border-amber-500/30'
                }`}
              >
                <span className={`font-medium block mb-0.5 ${active === i ? 'text-amber-400' : ''}`}>{s.label}</span>
                <span className="leading-relaxed opacity-80">{s.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: screenshot */}
        <div className="flex-1 animate-slide-left">
          <div className="card border-amber-500/30 h-full p-0 overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400"/>
                <div className="w-2 h-2 rounded-full bg-amber-400"/>
                <div className="w-2 h-2 rounded-full bg-green-400"/>
                <span className="text-xs text-slate-500 ml-2">Quick POC · {screenshots[active].label}</span>
              </div>
              <div className="flex gap-1">
                {screenshots.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="w-4 h-4 rounded-full border transition-all"
                    style={{
                      background: i === active ? '#f59e0b' : 'transparent',
                      borderColor: i === active ? '#f59e0b' : 'rgba(255,255,255,0.2)',
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="flex-1 overflow-hidden bg-white">
              <img
                key={active}
                src={screenshots[active].src}
                alt={screenshots[active].label}
                className="w-full h-full object-contain object-top animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
