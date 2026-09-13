import SlideLayout from '../components/SlideLayout'

const projects = [
  { name: 'NACRE', color: '#10b981', desc: 'Démonstrateur réseau électrique', stack: 'React/TS · Loopback · Electron' },
  { name: 'Quick POC', color: '#f59e0b', desc: 'Générateur de code & agrégateur', stack: 'React Flow · Yeoman · Node.js' },
  { name: 'MSPR', color: '#8b5cf6', desc: 'Optimisation SI K-Electronik', stack: 'PESTEL · SWOT · EBIOS · KPIs' },
]

const goals = [
  { icon: '🎯', title: 'Chef de projet technique', desc: 'Allier expertise technique et vision projet — rôle hybride Dev + Gestion' },
  { icon: '📋', title: 'Product Owner', desc: 'Traduction des besoins métier en feuille de route, pilotage de l\'équipe Dev' },
  { icon: '🤖', title: 'Technologies émergentes', desc: 'IA, Cloud, informatique quantique — rester pertinent dans un secteur en évolution' },
]

export default function ConclusionSlide() {
  return (
    <SlideLayout accent="#3b82f6">
      {/* Header */}
      <div className="shrink-0 mb-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30">Conclusion</span>
          <span className="text-slate-500 text-sm">Perspectives d'évolution professionnelle</span>
        </div>
        <h2 className="text-3xl font-bold text-white">Ce que cette expérience m'a apporté</h2>
        <p className="text-slate-400 text-sm mt-1">3 ans au CEA Tech Occitanie — de développeur à architecte de projets</p>
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 flex gap-5">

        {/* Left: projects + quote */}
        <div className="flex-1 min-h-0 flex flex-col gap-3">
          <p className="text-xs text-slate-500 uppercase tracking-wider shrink-0">Récapitulatif des 3 projets</p>

          {/* Project cards — compact */}
          {projects.map(({ name, color, desc, stack }) => (
            <div
              key={name}
              className="shrink-0 rounded-xl px-4 py-2.5 flex items-center gap-3"
              style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${color}30` }}
            >
              <div className="w-0.5 h-8 rounded-full shrink-0" style={{ background: color }} />
              <div>
                <p className="font-semibold text-white text-sm leading-none">{name}</p>
                <p className="text-slate-400 text-xs mt-0.5">{desc}</p>
                <p className="text-xs mt-0.5 font-mono" style={{ color }}>{stack}</p>
              </div>
            </div>
          ))}

          {/* Quote — flex-1 so it takes all remaining space */}
          <div className="flex-1 min-h-0 bg-white/5 border border-blue-500/20 rounded-2xl p-4 flex flex-col justify-center overflow-hidden">
            <p className="text-slate-300 text-xs leading-relaxed italic">
              "Cette expérience a consolidé ma capacité à décortiquer des problématiques complexes, élaborer des résolutions appropriées et les appliquer dans un contexte professionnel exigeant."
            </p>
            <p className="text-slate-500 text-xs mt-2">— Thomas Barille, Dossier RNCP Niveau 7</p>
          </div>
        </div>

        {/* Right: perspectives + contact */}
        <div className="flex-1 min-h-0 flex flex-col gap-3">
          <p className="text-xs text-slate-500 uppercase tracking-wider shrink-0">Perspectives à moyen terme</p>

          {goals.map(g => (
            <div key={g.title} className="shrink-0 bg-white/5 border border-blue-500/20 rounded-2xl p-4 flex gap-3">
              <span className="text-xl shrink-0">{g.icon}</span>
              <div>
                <p className="font-semibold text-white text-sm">{g.title}</p>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">{g.desc}</p>
              </div>
            </div>
          ))}

          {/* Contact — flex-1 */}
          <div className="flex-1 min-h-0 bg-white/5 border border-blue-500/25 rounded-2xl p-4 flex flex-col justify-between overflow-hidden">
            <div>
              <p className="text-white font-semibold">Thomas Barille</p>
              <p className="text-slate-400 text-xs mt-0.5">Expert Informatique & SI · EPSI Bordeaux 2025</p>
              <p className="text-blue-400 text-xs mt-1">thomasbarille@gmail.com</p>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {['React', 'TypeScript', 'Electron', 'Agile', 'Architecture SI'].map(t => (
                <span key={t} className="text-xs text-slate-400 bg-white/5 border border-white/10 rounded-lg px-2 py-0.5">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
