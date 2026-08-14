import SlideLayout from '../components/SlideLayout'

const goals = [
  {
    icon: '🎯',
    title: 'Chef de projet technique',
    desc: 'Allier expertise technique et vision projet — rôle hybride valorisant mon profil Dev + Gestion',
  },
  {
    icon: '📋',
    title: 'Product Owner',
    desc: 'Traduction des besoins métier en feuille de route technique, pilotage de l\'équipe Dev',
  },
  {
    icon: '🤖',
    title: 'Technologies émergentes',
    desc: 'IA, Cloud, informatique quantique — rester pertinent dans un secteur en perpétuelle évolution',
  },
]

const projects = [
  { name: 'NACRE', color: '#10b981', desc: 'Démonstrateur réseau électrique', stack: 'React/TS · Loopback · Electron' },
  { name: 'Quick POC', color: '#f59e0b', desc: 'Générateur de code & agrégateur', stack: 'React Flow · Yeoman · Node.js' },
  { name: 'MSPR', color: '#8b5cf6', desc: 'Optimisation SI K-Electronik', stack: 'PESTEL · SWOT · EBIOS · KPIs' },
]

export default function ConclusionSlide() {
  return (
    <SlideLayout accent="#3b82f6">
      <div className="animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <span className="tag bg-blue-500/20 text-blue-400 border border-blue-500/30">Conclusion</span>
          <span className="text-slate-500 text-sm">Perspectives d'évolution professionnelle</span>
        </div>
        <h2 className="text-4xl font-bold text-white mb-1">Ce que cette expérience m'a apporté</h2>
        <p className="text-slate-400">3 ans au CEA Tech Occitanie — de développeur à architecte de projets</p>
      </div>

      <div className="flex gap-8 flex-1 mt-8">
        {/* Left: projects recap */}
        <div className="flex-1 flex flex-col gap-4 animate-slide-right">
          <p className="text-xs text-slate-500 uppercase tracking-wider">Récapitulatif des 3 projets</p>
          {projects.map(({ name, color, desc, stack }) => (
            <div key={name} className="card flex items-center gap-4" style={{ borderColor: `${color}40` }}>
              <div className="w-1 h-12 rounded-full flex-shrink-0" style={{ background: color }}/>
              <div>
                <p className="font-semibold text-white">{name}</p>
                <p className="text-slate-400 text-xs">{desc}</p>
                <p className="text-xs mt-1 font-mono" style={{ color }}>{stack}</p>
              </div>
            </div>
          ))}

          <div className="card border-blue-500/20 mt-auto">
            <p className="text-slate-300 text-sm leading-relaxed italic">
              "Cette expérience a consolidé ma capacité à décortiquer des problématiques complexes, élaborer des résolutions appropriées et les appliquer dans un contexte professionnel exigeant."
            </p>
            <p className="text-slate-500 text-xs mt-2">— Thomas Barille, Dossier RNCP Niveau 7</p>
          </div>
        </div>

        {/* Right: perspectives */}
        <div className="flex-1 flex flex-col gap-4 animate-slide-left">
          <p className="text-xs text-slate-500 uppercase tracking-wider">Perspectives à moyen terme</p>
          {goals.map((g) => (
            <div key={g.title} className="card border-blue-500/20 flex gap-3">
              <span className="text-2xl flex-shrink-0">{g.icon}</span>
              <div>
                <p className="font-semibold text-white text-sm">{g.title}</p>
                <p className="text-slate-400 text-xs mt-1 leading-relaxed">{g.desc}</p>
              </div>
            </div>
          ))}

          {/* Contact */}
          <div className="card border-blue-500/30 mt-auto">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-semibold">Thomas Barille</p>
                <p className="text-slate-400 text-xs mt-0.5">Expert Informatique & SI · EPSI Bordeaux 2025</p>
                <p className="text-blue-400 text-xs mt-1">thomasbarille@gmail.com</p>
              </div>
              <div className="text-right">
                <div className="flex justify-end gap-2 flex-wrap">
                  {['React', 'TypeScript', 'Electron', 'Agile'].map(t => (
                    <span key={t} className="text-xs text-slate-400 bg-white/5 border border-white/10 rounded-lg px-2 py-0.5">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
