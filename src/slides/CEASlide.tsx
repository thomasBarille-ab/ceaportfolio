import SlideLayout from '../components/SlideLayout'

const projects = [
  { color: '#34d399', name: 'NACRE', desc: 'Simulation d\'architecture du réseau électrique — CEA × RTE' },
  { color: '#fbbf24', name: 'Quick POC', desc: 'Générateur de code & agrégateur de services — Plateforme DIGIT' },
  { color: '#e879f9', name: 'MSPR', desc: 'Optimisation du Système d\'Information de K-Electronik' },
]

const context = [
  { label: 'Site', value: 'CEA Tech Occitanie · Toulouse' },
  { label: 'Division', value: 'Plateforme DIGIT' },
  { label: 'Tuteur', value: 'Hugo DURET' },
  { label: 'Durée', value: '3 ans (alternance)' },
  { label: 'École', value: 'EPSI Bordeaux' },
  { label: 'Diplôme', value: 'RNCP Niveau 7 – EISI' },
]

const skills = ['Full Stack Dev', 'Gestion de projet', 'Architecture SI', 'Agile/Scrum', 'Analyse des risques', 'React/TS', 'Electron']

export default function CEASlide() {
  return (
    <SlideLayout accent="#fb923c">
      {/* Header */}
      <div className="shrink-0 mb-5">
        <p className="text-orange-400 text-xs font-semibold tracking-widest uppercase mb-2">Contexte</p>
        <h2 className="text-3xl font-bold text-white">CEA Tech Occitanie</h2>
        <p className="text-stone-400 text-sm mt-1">Commissariat à l'Énergie Atomique et aux Énergies Alternatives</p>
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 flex gap-5">

        {/* Left */}
        <div className="flex-1 min-h-0 flex flex-col gap-4">
          {/* Image CEA */}
          <div className="shrink-0 bg-white/5 border border-orange-500/25 rounded-2xl overflow-hidden">
            <p className="text-xs text-stone-400 px-4 pt-3 pb-1.5">4 grandes missions nationales — budget &gt; 5 milliards €/an</p>
            <img
              src="/images/p06_img01.jpeg"
              alt="Les 4 missions du CEA"
              className="w-full object-contain"
              style={{ maxHeight: 110, background: '#fff' }}
            />
          </div>

          {/* Projects */}
          <div className="flex-1 min-h-0 bg-white/5 border border-orange-500/20 rounded-2xl p-4 overflow-hidden">
            <p className="text-xs text-orange-400 font-semibold uppercase tracking-wider mb-3">3 Projets majeurs réalisés</p>
            <div className="space-y-3">
              {projects.map(({ color, name, desc }) => (
                <div key={name} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full shrink-0 mt-1.5" style={{ background: color }} />
                  <div>
                    <p className="text-white text-sm font-medium">{name}</p>
                    <p className="text-stone-400 text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="w-72 shrink-0 flex flex-col gap-4">
          {/* Context */}
          <div className="flex-1 min-h-0 bg-white/5 border border-orange-500/25 rounded-2xl p-4 overflow-hidden">
            <p className="text-xs text-orange-400 font-semibold uppercase tracking-wider mb-3">Mon contexte d'alternance</p>
            <div className="space-y-2.5">
              {context.map(({ label, value }) => (
                <div key={label} className="flex justify-between items-start gap-2 pb-2 border-b border-white/5 last:border-0 last:pb-0">
                  <span className="text-stone-500 text-xs shrink-0">{label}</span>
                  <span className="text-stone-200 text-xs text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Skills tags */}
          <div className="shrink-0 bg-white/5 border border-orange-500/25 rounded-2xl p-4">
            <p className="text-xs text-orange-400 font-semibold uppercase tracking-wider mb-2.5">Compétences visées</p>
            <div className="flex flex-wrap gap-1.5">
              {skills.map(t => (
                <span key={t} className="text-xs text-stone-300 bg-orange-500/10 border border-orange-500/20 rounded-full px-2 py-0.5">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
