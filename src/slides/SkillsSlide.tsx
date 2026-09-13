import SlideLayout from '../components/SlideLayout'

const blocks = [
  {
    bloc: 'Bloc 01', color: '#8b5cf6', project: 'MSPR + Quick POC',
    title: 'Analyser & Définir la stratégie SI',
    skills: ['Veille technologique (état de l\'art)', 'Collecte des besoins métier', 'Diagnostic SI & cartographie', 'Analyse des risques (SWOT, EBIOS)', 'Indicateurs clés (KPIs)'],
  },
  {
    bloc: 'Bloc 02', color: '#f59e0b', project: 'NACRE + Quick POC',
    title: 'Manager un projet avec agilité',
    skills: ['Planification (Gantt, chemin critique)', 'Cahier des charges technique', 'Outils Kanban & Gantt', 'Méthodes agiles (sprints, hebdos)'],
  },
  {
    bloc: 'Bloc 03', color: '#3b82f6', project: 'MSPR',
    title: 'Piloter l\'informatique décisionnelle',
    skills: ['Collecte des besoins en données', 'Architecture Business Intelligence', 'Centralisation & qualité des données'],
  },
  {
    bloc: 'Bloc 04', color: '#10b981', project: 'NACRE + Quick POC',
    title: 'Concevoir & Développer des solutions',
    skills: ['Architecture applicative (React/TS, Loopback)', 'Génération de squelettes (Yeoman)', 'Documentation technique', 'React Flow (DnD)'],
  },
]

const techTags = ['React', 'TypeScript', 'Loopback', 'Electron', 'Yeoman', 'React Flow', 'JSON', 'OpenStack', 'Kubernetes', 'CI/CD', 'PESTEL', 'SWOT', 'EBIOS', 'Lean IT', 'Agile/Scrum']

const selfEval = [
  { skill: 'Développement Full Stack', val: 85 },
  { skill: 'Gestion de projet Agile', val: 78 },
  { skill: 'Architecture SI', val: 70 },
  { skill: 'Analyse des risques', val: 65 },
  { skill: 'Communication client', val: 75 },
]

export default function SkillsSlide() {
  return (
    <SlideLayout accent="#3b82f6">
      {/* Header */}
      <div className="shrink-0 mb-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/30">Synthèse</span>
          <span className="text-slate-500 text-sm">Matrice de compétences RNCP Niveau 7</span>
        </div>
        <h2 className="text-3xl font-bold text-white">Compétences acquises</h2>
        <p className="text-slate-400 text-sm mt-1">4 blocs de compétences couverts sur 3 projets</p>
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 flex gap-5">

        {/* Left: 2x2 grid */}
        <div className="flex-1 min-h-0 grid grid-cols-2 grid-rows-2 gap-3">
          {blocks.map(b => (
            <div key={b.bloc} className="min-h-0 bg-white/5 border rounded-2xl p-4 overflow-hidden flex flex-col" style={{ borderColor: `${b.color}35` }}>
              <div className="flex items-center justify-between mb-1.5 shrink-0">
                <span className="text-xs font-mono font-semibold" style={{ color: b.color }}>{b.bloc}</span>
                <span className="text-xs text-slate-600">{b.project}</span>
              </div>
              <p className="text-white text-xs font-semibold mb-2 shrink-0">{b.title}</p>
              <ul className="space-y-1 overflow-hidden">
                {b.skills.map(s => (
                  <li key={s} className="flex items-start gap-1.5 text-xs text-slate-400">
                    <span style={{ color: b.color }} className="shrink-0 mt-0.5">·</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right */}
        <div className="w-56 shrink-0 flex flex-col gap-4">
          {/* Tech tags */}
          <div className="shrink-0 bg-white/5 border border-blue-500/25 rounded-2xl p-4">
            <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-2.5">Technologies & Méthodes</p>
            <div className="flex flex-wrap gap-1.5">
              {techTags.map(t => (
                <span key={t} className="text-xs text-slate-300 bg-white/5 border border-white/10 rounded-lg px-1.5 py-0.5">{t}</span>
              ))}
            </div>
          </div>

          {/* Self-evaluation bars */}
          <div className="flex-1 min-h-0 bg-white/5 border border-blue-500/25 rounded-2xl p-4 overflow-hidden flex flex-col">
            <p className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-3 shrink-0">Auto-évaluation</p>
            <div className="flex-1 min-h-0 flex flex-col justify-between overflow-hidden">
              {selfEval.map(({ skill, val }) => (
                <div key={skill}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">{skill}</span>
                    <span className="text-blue-400">{val}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400" style={{ width: `${val}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
