import SlideLayout from '../components/SlideLayout'

const defis = [
  {
    icon: '💰',
    title: 'Innovation vs viabilité économique',
    detail: 'Coût des solutions modernes disproportionné pour une PME. Tension entre ambitions et contraintes budgétaires.',
    solution: 'Exploration systématique d\'alternatives open-source tout en préservant la scalabilité et l\'alignement stratégique.',
  },
  {
    icon: '🧑‍🤝‍🧑',
    title: 'Résistance au changement',
    detail: 'Les utilisateurs craignaient la perte de maîtrise de leurs processus lors de la migration.',
    solution: 'Plan de conduite du changement : formations ciblées, communication proactive, déploiement progressif.',
  },
  {
    icon: '🧩',
    title: 'Fragmentation du SI existant',
    detail: 'Silos entre services, données non centralisées, incohérences potentielles lors de la migration FR/ES.',
    solution: 'Approche progressive de consolidation, KPIs rigoureux pour éviter les erreurs d\'évaluation post-projet.',
  },
]

const swotItems = [
  { cat: 'Forces', color: '#10b981', items: ['Expertise métier solide', 'Marque reconnue', 'ISO 9001'] },
  { cat: 'Faiblesses', color: '#ef4444', items: ['SI obsolète (ERP, Planning)', 'Excel central', 'Gouvernance IT faible'] },
  { cat: 'Opportunités', color: '#3b82f6', items: ['Expansion internationale', 'Digitalisation marketing', 'Cloud & IA'] },
  { cat: 'Menaces', color: '#f59e0b', items: ['Cybermenaces', 'Non-conformité RGPD', 'Concurrence numérique'] },
]

const learnedSkills = [
  'Analyse PESTEL & SWOT', 'Méthode EBIOS', 'Cartographie SI (4 niveaux)',
  'Définition de KPIs', 'Conduite du changement', 'Lean IT & Green IT',
]

export default function MSPRDefiSlide() {
  return (
    <SlideLayout accent="#8b5cf6">
      {/* Header */}
      <div className="shrink-0 mb-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/30">Projet 3 / 3</span>
          <span className="text-slate-500 text-sm">Difficultés & Apprentissages</span>
        </div>
        <h2 className="text-3xl font-bold text-white">MSPR — Défis rencontrés</h2>
        <p className="text-slate-400 text-sm mt-1">Complexités inhérentes à la transformation SI</p>
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 flex gap-5">

        {/* Left */}
        <div className="flex-1 min-h-0 flex flex-col gap-3">
          {defis.map(d => (
            <div key={d.title} className="flex-1 min-h-0 bg-white/5 border border-purple-500/20 rounded-2xl p-4 overflow-hidden">
              <div className="flex gap-3">
                <span className="text-xl shrink-0">{d.icon}</span>
                <div>
                  <p className="font-semibold text-white text-sm">{d.title}</p>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">{d.detail}</p>
                  <div className="mt-2 flex items-start gap-2">
                    <span className="text-purple-400 text-xs shrink-0">→</span>
                    <p className="text-purple-300 text-xs leading-relaxed">{d.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="w-64 shrink-0 flex flex-col gap-3">
          {/* SWOT summary */}
          <div className="flex-1 min-h-0 bg-white/5 border border-purple-500/25 rounded-2xl p-4 overflow-hidden">
            <p className="text-xs text-purple-400 font-semibold uppercase tracking-wider mb-2.5">SWOT K-Electronik</p>
            <div className="grid grid-cols-2 gap-2 h-[calc(100%-28px)]">
              {swotItems.map(({ cat, color, items }) => (
                <div key={cat} className="p-2 rounded-xl border overflow-hidden" style={{ borderColor: `${color}40`, background: `${color}08` }}>
                  <p className="text-xs font-semibold mb-1" style={{ color }}>{cat}</p>
                  <ul className="space-y-0.5">
                    {items.map(i => <li key={i} className="text-slate-400 text-xs">· {i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="shrink-0 bg-white/5 border border-purple-500/25 rounded-2xl p-4">
            <p className="text-xs text-purple-400 font-semibold uppercase tracking-wider mb-2.5">Compétences acquises</p>
            <div className="space-y-1.5">
              {learnedSkills.map(l => (
                <div key={l} className="flex items-center gap-2 text-xs text-slate-300">
                  <span className="text-purple-400 shrink-0">✓</span> {l}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
