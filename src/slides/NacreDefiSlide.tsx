import SlideLayout from '../components/SlideLayout'

const defis = [
  {
    icon: '📅',
    title: 'Contrainte de temps critique',
    detail: 'Le responsable absent 1.5 mois sur un projet de 2 mois — moins de temps pour les validations itératives.',
    solution: 'Adaptation du planning agile, documentation renforcée, auto-validation sur certaines fonctionnalités.',
  },
  {
    icon: '🎬',
    title: 'Animations SVG inconnues',
    detail: 'Animer dynamiquement un SVG en fonction des sélections utilisateur — technologie non maîtrisée au départ.',
    solution: 'Benchmark de librairies, montée en compétences rapide, intégration dans le démonstrateur.',
  },
  {
    icon: '🍎',
    title: 'Packaging MacOS depuis Windows',
    detail: 'L\'exécutable Electron ne peut être packagé pour macOS que depuis un Mac. Aucun Mac disponible au CEA.',
    solution: 'Pair-programming à distance : installation et build en partage d\'écran sur le Mac du client.',
  },
]

export default function NacreDefiSlide() {
  return (
    <SlideLayout accent="#10b981">
      {/* Header */}
      <div className="shrink-0 mb-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-500/15 text-green-400 border border-green-500/30">Projet 1 / 3</span>
          <span className="text-slate-500 text-sm">Difficultés & Apprentissages</span>
        </div>
        <h2 className="text-3xl font-bold text-white">NACRE — Défis rencontrés</h2>
        <p className="text-slate-400 text-sm mt-1">Obstacles techniques et organisationnels surmontés</p>
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 flex gap-5">

        {/* Left: défis */}
        <div className="flex-1 min-h-0 flex flex-col gap-3">
          {defis.map(d => (
            <div key={d.title} className="flex-1 min-h-0 bg-white/5 border border-green-500/20 rounded-2xl p-4 overflow-hidden">
              <div className="flex gap-3">
                <span className="text-xl shrink-0">{d.icon}</span>
                <div>
                  <p className="font-semibold text-white text-sm">{d.title}</p>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">{d.detail}</p>
                  <div className="mt-2 flex items-start gap-2">
                    <span className="text-green-400 text-xs shrink-0">→</span>
                    <p className="text-green-300 text-xs leading-relaxed">{d.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Kanban + stats */}
        <div className="w-[340px] shrink-0 flex flex-col gap-3">
          <div className="flex-1 min-h-0 bg-white/5 border border-green-500/25 rounded-2xl overflow-hidden flex flex-col">
            <div className="shrink-0 px-4 pt-3 pb-2">
              <p className="text-xs text-green-400 font-semibold uppercase tracking-wider">Kanban NACRE</p>
              <p className="text-xs text-slate-500 mt-0.5">À faire · En cours · À valider · Terminées</p>
            </div>
            <div className="flex-1 min-h-0 overflow-hidden">
              <img
                src="/images/p11_img01.png"
                alt="Kanban NACRE"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="shrink-0 bg-white/5 border border-green-500/25 rounded-2xl px-4 py-3">
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div>
                <p className="text-slate-400">Format livrable</p>
                <p className="text-white font-semibold mt-0.5">.exe / .dmg</p>
              </div>
              <div>
                <p className="text-slate-400">Durée projet</p>
                <p className="text-white font-semibold mt-0.5">2 mois</p>
              </div>
              <div>
                <p className="text-slate-400">Équipe</p>
                <p className="text-white font-semibold mt-0.5">2 alternants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
