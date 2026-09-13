import SlideLayout from '../components/SlideLayout'

const defis = [
  {
    icon: '🧭',
    title: 'Cadrage des besoins',
    detail: 'Beaucoup de demandes côté client (CDI). Risque de dérive du périmètre avec trop de combinaisons possibles.',
    solution: 'Définition d\'un MVP clair avec les parties prenantes. Priorisation stricte sur les besoins les plus critiques.',
  },
  {
    icon: '⚙️',
    title: 'Complexité du générateur backend',
    detail: 'Le générateur Back-end nécessitait de nombreux paramètres pour répondre aux différents cas d\'usage.',
    solution: 'Découpage en générateurs modulaires et indépendants. Progression itérative par jalons livrables.',
  },
  {
    icon: '🎯',
    title: 'Use case NACRE comme benchmark',
    detail: 'Jalon 2 = reconstruire NACRE via Quick POC en 1 semaine contre 2 mois de développement initial.',
    solution: 'Validation concrète de l\'outil par la réduction drastique du temps de setup — preuve du concept réussie.',
  },
]

const timeline = [
  { phase: 'Jalon 1', label: 'Cahier des charges + Spécifications + État de l\'art', done: true },
  { phase: 'Jalon 2', label: 'MVP Quick POC — use case NACRE en 1 semaine', done: true },
  { phase: 'Jalon 3', label: 'V2 + nouveaux générateurs & services tiers', done: false },
]

export default function QPOCDefiSlide() {
  return (
    <SlideLayout accent="#fbbf24">
      {/* Header */}
      <div className="shrink-0 mb-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">Projet 2 / 3</span>
          <span className="text-stone-500 text-sm">Difficultés & Organisation</span>
        </div>
        <h2 className="text-3xl font-bold text-white">Quick POC — Défis rencontrés</h2>
        <p className="text-stone-400 text-sm mt-1">Gestion de la complexité dans un projet en continu</p>
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 flex gap-5">

        {/* Left */}
        <div className="flex-1 min-h-0 flex flex-col gap-3">
          {defis.map(d => (
            <div key={d.title} className="flex-1 min-h-0 bg-white/5 border border-amber-500/20 rounded-2xl p-4 overflow-hidden">
              <div className="flex gap-3">
                <span className="text-xl shrink-0">{d.icon}</span>
                <div>
                  <p className="font-semibold text-white text-sm">{d.title}</p>
                  <p className="text-stone-400 text-xs mt-1 leading-relaxed">{d.detail}</p>
                  <div className="mt-2 flex items-start gap-2">
                    <span className="text-amber-400 text-xs shrink-0">→</span>
                    <p className="text-amber-300 text-xs leading-relaxed">{d.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Roadmap */}
          <div className="shrink-0 bg-white/5 border border-amber-500/25 rounded-2xl p-4">
            <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-2.5">Roadmap 3 jalons</p>
            <div className="space-y-2">
              {timeline.map(({ phase, label, done }) => (
                <div key={phase} className="flex items-start gap-3">
                  <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${done ? 'bg-amber-500 border-amber-400' : 'border-stone-600'}`}>
                    {done && <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
                  </div>
                  <div>
                    <p className={`text-xs font-semibold ${done ? 'text-amber-400' : 'text-stone-500'}`}>{phase}</p>
                    <p className="text-stone-300 text-xs mt-0.5">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Kanban */}
        <div className="w-[340px] shrink-0 flex flex-col gap-3">
          <div className="flex-1 min-h-0 bg-white/5 border border-amber-500/25 rounded-2xl overflow-hidden flex flex-col">
            <div className="shrink-0 px-4 pt-3 pb-2">
              <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Kanban Quick POC — Trello</p>
              <p className="text-xs text-stone-500 mt-0.5">TODO · WIP · Validation · Fait</p>
            </div>
            <div className="flex-1 min-h-0 overflow-hidden">
              <img
                src="/images/p21_img02.png"
                alt="Kanban Quick POC"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          <div className="shrink-0 bg-white/5 border border-amber-500/25 rounded-2xl px-4 py-3">
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div><p className="text-stone-400">Équipe</p><p className="text-white font-semibold mt-0.5">3 alternants</p></div>
              <div><p className="text-stone-400">Stakeholders</p><p className="text-white font-semibold mt-0.5">5 CDI clients</p></div>
              <div><p className="text-stone-400">Jalons</p><p className="text-white font-semibold mt-0.5">3 livrables</p></div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
