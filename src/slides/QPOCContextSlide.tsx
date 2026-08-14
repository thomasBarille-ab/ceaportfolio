import SlideLayout from '../components/SlideLayout'

const problems = [
  { icon: '🔀', label: 'Travail en silos', desc: 'Chaque équipe repart de zéro pour chaque POC' },
  { icon: '🔁', label: 'Tâches répétitives', desc: 'Configurations basiques dupliquées sur chaque projet' },
  { icon: '📉', label: 'Manque d\'efficacité', desc: 'Pas de normalisation, pratiques hétérogènes' },
  { icon: '🧩', label: 'Perte de connaissance', desc: 'Difficulté à reprendre les projets après rotation d\'équipe' },
]

const perimeter = [
  { cat: 'Principale', items: ['Auth & gestion utilisateurs', 'Conception POC Applicatif', 'Conception POC Réseau'] },
  { cat: 'Services (×12)', items: ['Générateur squelette Front/Back', 'Modélisation schéma UML', 'Déploiement VM / CI-CD / Standalone', 'Gestion des droits utilisateurs', 'Documentation intégrée'] },
]

export default function QPOCContextSlide() {
  return (
    <SlideLayout accent="#f59e0b">
      <div className="animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <span className="tag bg-amber-500/20 text-amber-400 border border-amber-500/30">Projet 2 / 3</span>
          <span className="text-slate-500 text-sm">Plateforme DIGIT — CEA Tech Occitanie</span>
        </div>
        <h2 className="text-4xl font-bold text-white mb-1">Quick POC</h2>
        <p className="text-slate-400 text-lg">Générateur de code & agrégateur de services</p>
      </div>

      <div className="flex gap-8 flex-1 mt-8">
        {/* Left */}
        <div className="flex-1 flex flex-col gap-5 animate-slide-right">
          <div className="card border-amber-500/30">
            <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-3">Problème identifié</div>
            <div className="grid grid-cols-2 gap-3">
              {problems.map((p) => (
                <div key={p.label} className="flex gap-2 items-start">
                  <span className="text-xl flex-shrink-0">{p.icon}</span>
                  <div>
                    <p className="text-white text-xs font-semibold">{p.label}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card border-amber-500/30 flex-1">
            <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider mb-3">Solution & Périmètre</div>
            <div className="space-y-4">
              {perimeter.map(({ cat, items }) => (
                <div key={cat}>
                  <p className="text-slate-500 text-xs mb-1.5">{cat}</p>
                  <div className="space-y-1.5">
                    {items.map(i => (
                      <div key={i} className="flex items-center gap-2 text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0"/>
                        {i}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-80 animate-slide-left">
          <div className="card border-amber-500/30 h-full flex flex-col gap-4">
            <div className="text-xs text-amber-400 font-semibold uppercase tracking-wider">Objectifs</div>
            {[
              { num: '50%', label: 'Réduction du temps sur tâches répétitives' },
              { num: '×1', label: 'Interface unique centralisée pour tous les POC' },
              { num: '12', label: 'Services et générateurs disponibles' },
            ].map(({ num, label }) => (
              <div key={num} className="card border-amber-500/20 text-center">
                <p className="text-3xl font-bold text-amber-400">{num}</p>
                <p className="text-xs text-slate-400 mt-1">{label}</p>
              </div>
            ))}

            <div className="mt-auto">
              <p className="text-xs text-slate-500 mb-2">Public cible</p>
              <div className="space-y-1.5 text-sm">
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
