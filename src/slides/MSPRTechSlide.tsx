import SlideLayout from '../components/SlideLayout'

const objectives = [
  { icon: '⚡', label: 'Performance', desc: 'Temps de réponse −50%, dispo 99,9%' },
  { icon: '🔒', label: 'Sécurité', desc: 'SIEM, ISO 27001, réduction vulnérabilités' },
  { icon: '📋', label: 'Conformité', desc: 'RGPD, gestion des risques structurée' },
  { icon: '🚀', label: 'Innovation', desc: 'Cloud, Big Data, IA prédictive' },
  { icon: '🇪🇸', label: 'Intégration Madrid', desc: 'Harmonisation processus FR/ES' },
]

const roadmap = [
  { year: 'An 1', items: ['Audit SI complet', 'Stratégie 3-5 ans', 'Lancement ERP/CRM'] },
  { year: 'An 2', items: ['Déploiement ITSM', 'Sécurité renforcée', 'Harmonisation FR/ES'] },
  { year: 'An 3', items: ['POC Cloud/IA', 'Consolidation infra', 'ISO 27001'] },
]

export default function MSPRTechSlide() {
  return (
    <SlideLayout accent="#e879f9">
      {/* Header */}
      <div className="shrink-0 mb-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-fuchsia-500/15 text-fuchsia-400 border border-fuchsia-500/30">Projet 3 / 3</span>
          <span className="text-stone-500 text-sm">Stratégie SI & Analyse des risques</span>
        </div>
        <h2 className="text-3xl font-bold text-white">MSPR — Stratégie & Analyses</h2>
        <p className="text-stone-400 text-sm mt-1">Plan de transformation du SI sur 3 à 5 ans</p>
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 flex gap-4">

        {/* Left: objectives */}
        <div className="w-48 shrink-0 flex flex-col gap-2">
          <p className="text-xs text-stone-500 uppercase tracking-wider shrink-0 mb-1">5 objectifs stratégiques</p>
          {objectives.map(o => (
            <div key={o.label} className="shrink-0 bg-white/5 border border-fuchsia-500/20 rounded-xl flex gap-2.5 items-start px-3 py-2">
              <span className="text-sm shrink-0">{o.icon}</span>
              <div>
                <p className="text-white text-xs font-medium">{o.label}</p>
                <p className="text-stone-400 text-xs mt-0.5 leading-relaxed">{o.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Middle: SWOT image + roadmap */}
        <div className="flex-1 min-h-0 flex flex-col gap-3">
          <div className="flex-1 min-h-0 bg-white/5 border border-fuchsia-500/25 rounded-2xl overflow-hidden flex flex-col">
            <div className="shrink-0 px-4 pt-3 pb-2">
              <span className="text-xs text-fuchsia-400 font-semibold uppercase tracking-wider">Analyse SWOT — K-Electronik</span>
            </div>
            <div className="flex-1 min-h-0 overflow-hidden bg-white">
              <img src="/images/p40_img01.png" alt="SWOT" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="shrink-0 flex gap-2">
            {roadmap.map(({ year, items }) => (
              <div key={year} className="flex-1 bg-white/5 border border-fuchsia-500/20 rounded-xl p-2.5">
                <p className="text-fuchsia-400 text-xs font-semibold mb-1">{year}</p>
                <div className="space-y-0.5">
                  {items.map(i => (
                    <div key={i} className="flex items-center gap-1 text-xs text-stone-300">
                      <span className="w-1 h-1 rounded-full bg-fuchsia-400 shrink-0" /> {i}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Risk matrix */}
        <div className="flex-1 min-h-0 flex flex-col gap-3">
          <div className="flex-1 min-h-0 bg-white/5 border border-fuchsia-500/25 rounded-2xl overflow-hidden flex flex-col">
            <div className="shrink-0 px-4 pt-3 pb-2">
              <span className="text-xs text-fuchsia-400 font-semibold uppercase tracking-wider">Matrice des risques EBIOS</span>
              <p className="text-xs text-stone-500 mt-0.5">R1: Ransomware · R2: Fuite données · R3: Panne ERP</p>
            </div>
            <div className="flex-1 min-h-0 overflow-hidden bg-white flex items-center justify-center">
              <img src="/images/p44_img01.png" alt="Matrice EBIOS" className="w-full h-full object-contain" />
            </div>
          </div>
          <div className="shrink-0 bg-white/5 border border-fuchsia-500/25 rounded-2xl px-4 py-2.5">
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div><p className="text-red-400 font-bold">Critique</p><p className="text-stone-500 mt-0.5">Ransomware</p></div>
              <div><p className="text-amber-400 font-bold">Élevé</p><p className="text-stone-500 mt-0.5">Fuite données</p></div>
              <div><p className="text-emerald-400 font-bold">Modéré</p><p className="text-stone-500 mt-0.5">Panne ERP</p></div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
