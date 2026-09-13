import SlideLayout from '../components/SlideLayout'

const org = [
  'Travail en binôme avec un collègue alternant',
  'Approche agile — point hebdo avec le manager',
  'Diagramme de Gantt + Kanban (4 colonnes)',
  'Journée de cadrage avec le client (CEA Paris-Saclay)',
  'Collaboration avec graphiste UI/UX (YSPOT)',
]

export default function NacreContextSlide() {
  return (
    <SlideLayout accent="#34d399">
      {/* Header */}
      <div className="shrink-0 mb-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">Projet 1 / 3</span>
          <span className="text-stone-500 text-sm">Collaboration CEA Paris-Saclay × RTE</span>
        </div>
        <h2 className="text-3xl font-bold text-white">NACRE</h2>
        <p className="text-stone-400 text-sm mt-1">Nouvelles Architectures de Contrôle du Réseau Électrique</p>
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 flex gap-5">

        {/* Left */}
        <div className="flex-1 min-h-0 flex flex-col gap-4">
          {/* Context */}
          <div className="shrink-0 bg-white/5 border border-emerald-500/25 rounded-2xl p-4">
            <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2.5">Contexte & Périmètre</p>
            <p className="text-stone-300 text-sm leading-relaxed">
              Projet conjoint <strong className="text-white">CEA Paris-Saclay × RTE</strong>. Développement d'un <strong className="text-white">démonstrateur exécutable</strong> composé de deux modules :
            </p>
            <div className="mt-3 space-y-2">
              {[
                { n: '1', title: 'Contextualisation', desc: 'État actuel du réseau + projections d\'évolution' },
                { n: '2', title: 'Simulation', desc: 'Sélection d\'architectures et scénarios avec visualisation animée' },
              ].map(({ n, title, desc }) => (
                <div key={n} className="flex gap-3 items-start">
                  <span className="w-5 h-5 rounded-md bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold shrink-0">{n}</span>
                  <div>
                    <p className="text-white text-xs font-medium">{title}</p>
                    <p className="text-stone-400 text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organisation */}
          <div className="flex-1 min-h-0 bg-white/5 border border-emerald-500/25 rounded-2xl p-4 overflow-hidden">
            <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider mb-2.5">Organisation</p>
            <div className="space-y-1.5">
              {org.map(item => (
                <div key={item} className="flex items-center gap-2 text-xs text-stone-300">
                  <span className="text-emerald-400 shrink-0">✓</span> {item}
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-white/10 flex gap-4 text-xs text-stone-500">
              <span>🏛 CEA Paris-Saclay</span>
              <span>⚡ RTE</span>
              <span>🎨 YSPOT</span>
            </div>
          </div>
        </div>

        {/* Right: screenshot */}
        <div className="w-[340px] shrink-0 flex flex-col gap-3">
          <div className="flex-1 min-h-0 bg-white/5 border border-emerald-500/25 rounded-2xl overflow-hidden flex flex-col">
            <div className="shrink-0 px-4 pt-3 pb-2 flex items-center justify-between">
              <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Page d'accueil NACRE</span>
              <span className="text-xs text-stone-500">Electron · Web</span>
            </div>
            <div className="flex-1 min-h-0 flex items-center justify-center overflow-hidden" style={{ background: '#0d1117' }}>
              <img
                src="/images/p12_img01.jpeg"
                alt="NACRE HomePage"
                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', display: 'block' }}
              />
            </div>
          </div>
          <div className="shrink-0 bg-white/5 border border-emerald-500/20 rounded-2xl py-2.5 px-4 text-center">
            <p className="text-xs text-stone-400">Stack : <span className="text-white">React/TypeScript</span> · <span className="text-white">Loopback</span> · <span className="text-white">Electron</span></p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
