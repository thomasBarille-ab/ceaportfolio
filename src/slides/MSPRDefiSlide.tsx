import SlideLayout from '../components/SlideLayout'

const defis = [
  {
    icon: '💰',
    title: 'Innovation vs viabilité économique',
    detail: 'Coût des solutions modernes disproportionné pour une PME. Tension entre les ambitions et les contraintes budgétaires réelles.',
    solution: 'Exploration systématique d\'alternatives open-source tout en préservant la scalabilité et l\'alignement stratégique.',
  },
  {
    icon: '🧑‍🤝‍🧑',
    title: 'Résistance au changement',
    detail: 'Les utilisateurs fictifs craignaient la perte de maîtrise de leurs processus et la surcharge lors de la migration.',
    solution: 'Élaboration d\'un plan de conduite du changement : formations ciblées, communication proactive, déploiement progressif.',
  },
  {
    icon: '🧩',
    title: 'Fragmentation du SI existant',
    detail: 'Silos entre services, données non centralisées, incohérences potentielles lors de la migration France/Espagne.',
    solution: 'Approche progressive de consolidation, définition rigoureuse des KPIs pour éviter les erreurs d\'évaluation post-projet.',
  },
]

const swotItems = [
  { cat: 'Forces', color: '#10b981', items: ['Expertise métier solide', 'Marque reconnue', 'Certification ISO 9001'] },
  { cat: 'Faiblesses', color: '#ef4444', items: ['SI obsolète (ERP, Planning)', 'Excel comme outil central', 'Gouvernance IT faible'] },
  { cat: 'Opportunités', color: '#3b82f6', items: ['Expansion internationale (Madrid)', 'Digitalisation marketing', 'Cloud & IA'] },
  { cat: 'Menaces', color: '#f59e0b', items: ['Cybermenaces croissantes', 'Non-conformité RGPD', 'Concurrence numérique'] },
]

export default function MSPRDefiSlide() {
  return (
    <SlideLayout accent="#8b5cf6">
      <div className="animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <span className="tag bg-purple-500/20 text-purple-400 border border-purple-500/30">Projet 3 / 3</span>
          <span className="text-slate-500 text-sm">Difficultés & Apprentissages</span>
        </div>
        <h2 className="text-4xl font-bold text-white mb-1">MSPR — Défis rencontrés</h2>
        <p className="text-slate-400">Complexités inhérentes à la transformation SI</p>
      </div>

      <div className="flex gap-8 flex-1 mt-8">
        <div className="flex-1 flex flex-col gap-4 animate-slide-right">
          {defis.map((d) => (
            <div key={d.title} className="card border-purple-500/20">
              <div className="flex gap-3">
                <span className="text-2xl flex-shrink-0">{d.icon}</span>
                <div>
                  <p className="font-semibold text-white text-sm">{d.title}</p>
                  <p className="text-slate-400 text-xs mt-1 leading-relaxed">{d.detail}</p>
                  <div className="mt-2 flex items-start gap-2">
                    <span className="text-purple-400 text-xs flex-shrink-0">→</span>
                    <p className="text-purple-300 text-xs leading-relaxed">{d.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-72 animate-slide-left flex flex-col gap-4">
          {/* SWOT summary */}
          <div className="card border-purple-500/30 flex-1">
            <div className="text-xs text-purple-400 font-semibold uppercase tracking-wider mb-3">Analyse SWOT K-Electronik</div>
            <div className="grid grid-cols-2 gap-2">
              {swotItems.map(({ cat, color, items }) => (
                <div key={cat} className="p-2 rounded-xl border" style={{ borderColor: `${color}40`, background: `${color}08` }}>
                  <p className="text-xs font-semibold mb-1.5" style={{ color }}>{cat}</p>
                  <ul className="space-y-0.5">
                    {items.map(i => <li key={i} className="text-slate-400 text-xs">· {i}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="card border-purple-500/30">
            <div className="text-xs text-purple-400 font-semibold uppercase tracking-wider mb-3">Compétences acquises</div>
            <ul className="space-y-1.5">
              {[
                'Analyse PESTEL & SWOT',
                'Méthode EBIOS (gestion des risques)',
                'Cartographie SI (4 niveaux)',
                'Définition de KPIs stratégiques',
                'Conduite du changement',
                'Lean IT & Green IT',
              ].map(l => (
                <li key={l} className="flex items-start gap-2 text-xs text-slate-300">
                  <span className="text-purple-400 flex-shrink-0">✓</span>
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
