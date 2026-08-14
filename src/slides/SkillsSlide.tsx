import SlideLayout from '../components/SlideLayout'

const blocks = [
  {
    bloc: 'Bloc 01',
    title: 'Analyser & Définir la stratégie SI',
    color: '#8b5cf6',
    skills: ['Veille technologique (état de l\'art)', 'Collecte des besoins métier', 'Diagnostic SI & cartographie (4 niveaux)', 'Analyse des risques (SWOT, EBIOS, matrice)', 'Indicateurs clés de performance (KPIs)'],
    project: 'MSPR + Quick POC',
  },
  {
    bloc: 'Bloc 02',
    title: 'Manager un projet informatique avec agilité',
    color: '#f59e0b',
    skills: ['Planification (jalons, Gantt, chemin critique)', 'Cahier des charges technique et fonctionnel', 'Outils de gestion (Kanban, Gantt)', 'Méthodes agiles (sprints, points hebdo)'],
    project: 'NACRE + Quick POC',
  },
  {
    bloc: 'Bloc 03',
    title: 'Piloter l\'informatique décisionnelle',
    color: '#3b82f6',
    skills: ['Collecte des besoins en données', 'Architecture Business Intelligence', 'Centralisation & qualité des données'],
    project: 'MSPR',
  },
  {
    bloc: 'Bloc 04',
    title: 'Concevoir & Développer des solutions applicatives',
    color: '#10b981',
    skills: ['Architecture applicative (React/TS, Loopback, Electron)', 'Génération de squelettes de projets (Yeoman)', 'Documentation technique', 'React Flow (interface DnD)'],
    project: 'NACRE + Quick POC',
  },
]

const techTags = [
  'React', 'TypeScript', 'Loopback', 'Electron', 'Yeoman',
  'React Flow', 'JSON', 'OpenStack', 'Kubernetes', 'CI/CD',
  'PESTEL', 'SWOT', 'EBIOS', 'Lean IT', 'Agile/Scrum',
]

export default function SkillsSlide() {
  return (
    <SlideLayout accent="#3b82f6">
      <div className="animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <span className="tag bg-blue-500/20 text-blue-400 border border-blue-500/30">Synthèse</span>
          <span className="text-slate-500 text-sm">Matrice de compétences RNCP Niveau 7</span>
        </div>
        <h2 className="text-4xl font-bold text-white mb-1">Compétences acquises</h2>
        <p className="text-slate-400">4 blocs de compétences couverts sur 3 projets</p>
      </div>

      <div className="flex gap-6 flex-1 mt-8">
        {/* Blocs */}
        <div className="flex-1 grid grid-cols-2 gap-3 animate-slide-right">
          {blocks.map((b) => (
            <div key={b.bloc} className="card" style={{ borderColor: `${b.color}40` }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono" style={{ color: b.color }}>{b.bloc}</span>
                <span className="text-xs text-slate-600">{b.project}</span>
              </div>
              <p className="text-white text-sm font-medium mb-2">{b.title}</p>
              <ul className="space-y-1">
                {b.skills.map(s => (
                  <li key={s} className="flex items-start gap-1.5 text-xs text-slate-400">
                    <span style={{ color: b.color }} className="flex-shrink-0 mt-0.5">·</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Right: tech cloud + radar */}
        <div className="w-64 flex flex-col gap-4 animate-slide-left">
          <div className="card border-blue-500/30">
            <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-3">Technologies & Méthodes</div>
            <div className="flex flex-wrap gap-1.5">
              {techTags.map(t => (
                <span key={t} className="text-xs text-slate-300 bg-white/5 border border-white/10 rounded-lg px-2 py-0.5">{t}</span>
              ))}
            </div>
          </div>

          {/* Radar-style chart */}
          <div className="card border-blue-500/30 flex-1">
            <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-3">Auto-évaluation</div>
            <div className="space-y-2.5">
              {[
                { skill: 'Développement Full Stack', val: 85 },
                { skill: 'Gestion de projet Agile', val: 78 },
                { skill: 'Architecture SI', val: 70 },
                { skill: 'Analyse des risques', val: 65 },
                { skill: 'Communication client', val: 75 },
              ].map(({ skill, val }) => (
                <div key={skill}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">{skill}</span>
                    <span className="text-blue-400">{val}%</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400"
                      style={{ width: `${val}%` }}
                    />
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
