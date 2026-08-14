import SlideLayout from '../components/SlideLayout'

const objectives = [
  { icon: '⚡', label: 'Performance', desc: 'Temps de réponse −50%, dispo 99,9%, incidents −20%' },
  { icon: '🔒', label: 'Sécurité', desc: 'SIEM, réduction vulnérabilités, certification ISO 27001' },
  { icon: '📋', label: 'Conformité', desc: 'RGPD, réglementations obligatoires, gestion des risques structurée' },
  { icon: '🚀', label: 'Innovation', desc: 'Cloud, Big Data, IA — prévision de la demande, etc.' },
  { icon: '🇪🇸', label: 'Intégration Madrid', desc: 'Harmoniser processus, infrastructure commune, nouvelle stratégie marketing' },
]

const roadmap = [
  { year: 'An 1', items: ['Audit SI complet', 'Stratégie 3-5 ans', 'Gouvernance (rôles clés)', 'Lancement ERP/CRM'] },
  { year: 'An 2', items: ['Déploiement ITSM', 'Renforcement sécurité', 'Harmonisation FR/ES', 'Campagne marketing'] },
  { year: 'An 3', items: ['POC Cloud/IA/Big Data', 'Consolidation infra', 'Certification ISO 27001'] },
]

export default function MSPRTechSlide() {
  return (
    <SlideLayout accent="#8b5cf6">
      <div className="animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <span className="tag bg-purple-500/20 text-purple-400 border border-purple-500/30">Projet 3 / 3</span>
          <span className="text-slate-500 text-sm">Stratégie SI & Analyse des risques</span>
        </div>
        <h2 className="text-4xl font-bold text-white mb-1">MSPR — Stratégie & Analyses</h2>
        <p className="text-slate-400">Plan de transformation du SI sur 3 à 5 ans — outils produits</p>
      </div>

      <div className="flex gap-6 flex-1 mt-6">
        {/* Left: objectives */}
        <div className="w-52 animate-slide-right flex flex-col gap-2">
          <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">5 objectifs stratégiques</p>
          {objectives.map((o) => (
            <div key={o.label} className="card border-purple-500/20 flex gap-2.5 items-start py-2.5 px-3">
              <span className="text-base flex-shrink-0">{o.icon}</span>
              <div>
                <p className="text-white text-xs font-medium">{o.label}</p>
                <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{o.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Middle: SWOT réel */}
        <div className="flex-1 animate-slide-up flex flex-col gap-3">
          <div className="card border-purple-500/30 p-0 overflow-hidden flex-1 flex flex-col">
            <div className="px-4 pt-3 pb-2">
              <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider">Analyse SWOT — K-Electronik</span>
            </div>
            <div className="flex-1 overflow-hidden bg-white">
              <img
                src="/images/p40_img01.png"
                alt="SWOT K-Electronik"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="flex gap-3 flex-shrink-0">
            {roadmap.map(({ year, items }) => (
              <div key={year} className="card border-purple-500/20 flex-1">
                <p className="text-purple-400 text-xs font-semibold mb-1.5">{year}</p>
                <div className="space-y-1">
                  {items.map(i => (
                    <div key={i} className="flex items-center gap-1.5 text-xs text-slate-300">
                      <span className="w-1 h-1 rounded-full bg-purple-400 flex-shrink-0"/>
                      {i}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Risk matrix réelle */}
        <div className="flex-1 animate-slide-left flex flex-col gap-3">
          <div className="card border-purple-500/30 p-0 overflow-hidden flex-1 flex flex-col">
            <div className="px-4 pt-3 pb-2">
              <span className="text-xs text-purple-400 font-semibold uppercase tracking-wider">Matrice des risques EBIOS</span>
              <p className="text-xs text-slate-500 mt-0.5">R1: Ransomware · R2: Fuite données · R3: Panne ERP · R4: Erreur prix</p>
            </div>
            <div className="flex-1 overflow-hidden bg-white flex items-center justify-center">
              <img
                src="/images/p44_img01.png"
                alt="Matrice des risques EBIOS"
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          <div className="card border-purple-500/30 py-3 flex-shrink-0">
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div>
                <p className="text-red-400 font-bold text-sm">Critique</p>
                <p className="text-slate-500 mt-0.5">Ransomware · RGPD</p>
              </div>
              <div>
                <p className="text-amber-400 font-bold text-sm">Élevé</p>
                <p className="text-slate-500 mt-0.5">Fuite données</p>
              </div>
              <div>
                <p className="text-green-400 font-bold text-sm">Modéré</p>
                <p className="text-slate-500 mt-0.5">Panne ERP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
