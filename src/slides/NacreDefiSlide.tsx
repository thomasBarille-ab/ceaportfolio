import SlideLayout from '../components/SlideLayout'

const defis = [
  {
    icon: '📅',
    title: 'Contrainte de temps critique',
    detail: 'Le responsable du projet NACRE en vacances 1 mois et demi sur un projet de 2 mois. Moins de temps pour les validations itératives.',
    solution: 'Adaptation du planning agile, documentation renforcée, auto-validation sur certaines fonctionnalités.',
  },
  {
    icon: '🎬',
    title: 'Animations SVG inconnues',
    detail: 'Animer dynamiquement un SVG en fonction des sélections utilisateur — technologie non maîtrisée au départ.',
    solution: 'Recherche, benchmark de librairies, montée en compétences rapide, intégration dans le démonstrateur.',
  },
  {
    icon: '🍎',
    title: 'Packaging MacOS depuis Windows',
    detail: 'L\'exécutable Electron ne peut être packagé pour macOS que depuis un Mac. Aucun Mac disponible sur site au CEA.',
    solution: 'Session de pair-programming à distance : installation de l\'environnement sur le Mac du client, build en partage d\'écran.',
  },
]

export default function NacreDefiSlide() {
  return (
    <SlideLayout accent="#10b981">
      <div className="animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <span className="tag bg-green-500/20 text-green-400 border border-green-500/30">Projet 1 / 3</span>
          <span className="text-slate-500 text-sm">Difficultés & Apprentissages</span>
        </div>
        <h2 className="text-4xl font-bold text-white mb-1">NACRE — Défis rencontrés</h2>
        <p className="text-slate-400">Obstacles techniques et organisationnels surmontés</p>
      </div>

      <div className="flex gap-8 flex-1 mt-8">
        {/* Left: défis */}
        <div className="flex-1 flex flex-col gap-4 animate-slide-right">
          {defis.map((d) => (
            <div key={d.title} className="card border-green-500/20">
              <div className="flex gap-3">
                <span className="text-2xl flex-shrink-0">{d.icon}</span>
                <div>
                  <p className="font-semibold text-white text-sm">{d.title}</p>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">{d.detail}</p>
                  <div className="mt-2 flex items-start gap-2">
                    <span className="text-green-400 text-xs flex-shrink-0">→</span>
                    <p className="text-green-300 text-xs leading-relaxed">{d.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Kanban réel + livrable */}
        <div className="w-96 flex flex-col gap-4 animate-slide-left">
          <div className="card border-green-500/30 p-0 overflow-hidden flex-1 flex flex-col">
            <div className="px-4 pt-3 pb-2">
              <span className="text-xs text-green-400 font-semibold uppercase tracking-wider">Kanban NACRE — outil réel</span>
              <p className="text-xs text-slate-500 mt-0.5">4 colonnes : À faire · En cours · À valider · Terminées</p>
            </div>
            <div className="flex-1 overflow-hidden">
              <img
                src="/images/p11_img01.png"
                alt="Kanban NACRE"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          <div className="card border-green-500/30 py-3">
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              <div>
                <p className="text-slate-400">Format livrable</p>
                <p className="text-white font-medium mt-0.5">.exe / .dmg</p>
              </div>
              <div>
                <p className="text-slate-400">Durée projet</p>
                <p className="text-white font-medium mt-0.5">2 mois</p>
              </div>
              <div>
                <p className="text-slate-400">Équipe</p>
                <p className="text-white font-medium mt-0.5">2 alternants</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
