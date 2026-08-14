import SlideLayout from '../components/SlideLayout'

export default function NacreContextSlide() {
  return (
    <SlideLayout accent="#10b981">
      <div className="animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <span className="tag bg-green-500/20 text-green-400 border border-green-500/30">Projet 1 / 3</span>
          <span className="text-slate-500 text-sm">Collaboration CEA Paris-Saclay × RTE</span>
        </div>
        <h2 className="text-4xl font-bold text-white mb-1">NACRE</h2>
        <p className="text-slate-400 text-lg">Nouvelles Architectures de Contrôle du Réseau Électrique</p>
      </div>

      <div className="flex gap-8 flex-1 mt-8">
        {/* Left: context */}
        <div className="flex-1 flex flex-col gap-4 animate-slide-right">
          <div className="card border-green-500/30">
            <div className="text-xs text-green-400 font-semibold uppercase tracking-wider mb-3">Contexte & Périmètre</div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Projet conjoint initié par un laboratoire du <strong className="text-white">CEA Paris-Saclay</strong> en collaboration avec <strong className="text-white">RTE</strong> (Réseau de Transport Électrique). Développement d'un <strong className="text-white">démonstrateur exécutable</strong> composé de deux parties :
            </p>
            <div className="mt-4 space-y-3">
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center text-xs font-bold flex-shrink-0">1</span>
                <div>
                  <p className="text-white text-sm font-medium">Contextualisation</p>
                  <p className="text-slate-400 text-xs">État actuel du réseau électrique + projections d'évolution</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-lg bg-green-500/20 text-green-400 flex items-center justify-center text-xs font-bold flex-shrink-0">2</span>
                <div>
                  <p className="text-white text-sm font-medium">Simulation</p>
                  <p className="text-slate-400 text-xs">Sélection d'architectures et de scénarios avec visualisation animée</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card border-green-500/30 flex-1">
            <div className="text-xs text-green-400 font-semibold uppercase tracking-wider mb-3">Organisation</div>
            <div className="space-y-2 text-sm">
              {[
                'Travail en binôme avec un collègue alternant',
                'Approche agile — point hebdo avec le manager',
                'Diagramme de Gantt + Kanban (4 colonnes)',
                'Journée de cadrage avec le client (CEA Paris-Saclay à Toulouse)',
                'Collaboration avec graphiste UI/UX (YSPOT)',
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-slate-300">
                  <span className="text-green-400 flex-shrink-0">✓</span> {item}
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-white/10 flex gap-3 text-xs text-slate-400">
              <span>🏛 CEA Paris-Saclay</span>
              <span>⚡ RTE</span>
              <span>🎨 YSPOT</span>
            </div>
          </div>
        </div>

        {/* Right: real screenshot NACRE HomePage */}
        <div className="w-96 animate-slide-left flex flex-col gap-3">
          <div className="card border-green-500/30 p-0 overflow-hidden flex-1 flex flex-col">
            <div className="px-4 pt-3 pb-2 flex items-center justify-between">
              <span className="text-xs text-green-400 font-semibold uppercase tracking-wider">Page d'accueil NACRE</span>
              <span className="text-xs text-slate-500">Electron · Web</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <img
                src="/images/p12_img01.jpeg"
                alt="NACRE HomePage"
                className="w-full h-full object-cover object-top"
                style={{ minHeight: 0 }}
              />
            </div>
          </div>
          <div className="card border-green-500/20 py-2 px-4">
            <p className="text-xs text-slate-400 text-center">Stack : <span className="text-white">React/TypeScript</span> · <span className="text-white">Loopback</span> · <span className="text-white">Electron</span></p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
