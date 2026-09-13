import SlideLayout from '../components/SlideLayout'

const problems = [
  { icon: '🔀', label: 'Travail en silos', desc: 'Chaque équipe repart de zéro pour chaque POC' },
  { icon: '🔁', label: 'Tâches répétitives', desc: 'Configurations basiques dupliquées sur chaque projet' },
  { icon: '📉', label: 'Manque d\'efficacité', desc: 'Pas de normalisation, pratiques hétérogènes' },
  { icon: '🧩', label: 'Perte de connaissance', desc: 'Difficulté à reprendre les projets après rotation' },
]

const perimeter = [
  { cat: 'Principale', items: ['Auth & gestion utilisateurs', 'Conception POC Applicatif', 'Conception POC Réseau'] },
  { cat: 'Services (×12)', items: ['Générateur squelette Front/Back', 'Modélisation schéma UML', 'Déploiement VM / CI-CD / Standalone', 'Gestion des droits', 'Documentation intégrée'] },
]

const objectives = [
  { num: '50%', label: 'Réduction du temps sur tâches répétitives' },
  { num: '×1', label: 'Interface unique pour tous les POC' },
  { num: '12', label: 'Services et générateurs disponibles' },
]

export default function QPOCContextSlide() {
  return (
    <SlideLayout accent="#f59e0b">
      {/* Header */}
      <div className="shrink-0 mb-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30">Projet 2 / 3</span>
          <span className="text-slate-500 text-sm">Plateforme DIGIT — CEA Tech Occitanie</span>
        </div>
        <h2 className="text-3xl font-bold text-white">Quick POC</h2>
        <p className="text-slate-400 text-sm mt-1">Générateur de code & agrégateur de services</p>
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 flex gap-5">

        {/* Left */}
        <div className="flex-1 min-h-0 flex flex-col gap-4">
          {/* Problems */}
          <div className="shrink-0 bg-white/5 border border-amber-500/25 rounded-2xl p-4">
            <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-3">Problème identifié</p>
            <div className="grid grid-cols-2 gap-3">
              {problems.map(p => (
                <div key={p.label} className="flex gap-2 items-start">
                  <span className="text-lg shrink-0">{p.icon}</span>
                  <div>
                    <p className="text-white text-xs font-semibold">{p.label}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Perimeter */}
          <div className="flex-1 min-h-0 bg-white/5 border border-amber-500/25 rounded-2xl p-4 overflow-hidden">
            <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-3">Solution & Périmètre</p>
            <div className="space-y-3">
              {perimeter.map(({ cat, items }) => (
                <div key={cat}>
                  <p className="text-slate-500 text-xs mb-1.5">{cat}</p>
                  <div className="space-y-1">
                    {items.map(i => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                        {i}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: objectives */}
        <div className="w-64 shrink-0 flex flex-col gap-3">
          <div className="flex-1 min-h-0 bg-white/5 border border-amber-500/25 rounded-2xl p-4 flex flex-col overflow-hidden">
            <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-3 shrink-0">Objectifs</p>
            <div className="flex flex-col gap-3">
              {objectives.map(({ num, label }) => (
                <div key={num} className="bg-white/5 border border-amber-500/20 rounded-xl p-3 text-center">
                  <p className="text-2xl font-bold text-amber-400">{num}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-4 shrink-0">
              <p className="text-xs text-slate-500 mb-2">Public cible</p>
              <div className="space-y-1.5 text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-amber-400">→</span> Équipe DIGIT (phase 1)
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <span className="text-amber-400">→</span> Tous salariés DRT (phase 2)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
