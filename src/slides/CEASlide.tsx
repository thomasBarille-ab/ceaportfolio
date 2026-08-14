import SlideLayout from '../components/SlideLayout'

export default function CEASlide() {
  return (
    <SlideLayout accent="#3b82f6">
      <div className="animate-slide-up">
        <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Contexte</p>
        <h2 className="text-4xl font-bold text-white mb-1">CEA Tech Occitanie</h2>
        <p className="text-slate-400 mb-6">Commissariat à l'Énergie Atomique et aux Énergies Alternatives</p>
      </div>

      <div className="flex gap-8 flex-1">
        {/* Left: missions image + description */}
        <div className="flex-1 flex flex-col gap-4 animate-slide-right">
          <div className="card border-blue-500/30 p-0 overflow-hidden">
            <div className="px-4 pt-4 pb-2">
              <p className="text-xs text-slate-400">4 grandes missions nationales — budget &gt; 5 milliards €/an</p>
            </div>
            <img
              src="/images/p06_img01.jpeg"
              alt="Les 4 missions du CEA"
              className="w-full object-contain"
              style={{ maxHeight: 130, background: '#fff' }}
            />
          </div>

          <div className="card border-blue-500/20 flex-1">
            <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-3">3 Projets majeurs réalisés</div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 mt-1.5"/>
                <div>
                  <p className="text-white text-sm font-medium">NACRE</p>
                  <p className="text-slate-400 text-xs">Simulation d'architecture du réseau électrique — collaboration CEA × RTE</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-amber-400 flex-shrink-0 mt-1.5"/>
                <div>
                  <p className="text-white text-sm font-medium">Quick POC</p>
                  <p className="text-slate-400 text-xs">Générateur de code & agrégateur de services pour la plateforme DIGIT</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0 mt-1.5"/>
                <div>
                  <p className="text-white text-sm font-medium">MSPR</p>
                  <p className="text-slate-400 text-xs">Optimisation du Système d'Information de l'entreprise K-Electronik</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: my context */}
        <div className="w-80 flex flex-col gap-4 animate-slide-left">
          <div className="card border-blue-500/30 flex-1">
            <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-4">Mon contexte d'alternance</div>
            <div className="space-y-3 text-sm">
              {[
                { label: 'Site', value: 'CEA Tech Occitanie · Toulouse' },
                { label: 'Division', value: 'Plateforme DIGIT' },
                { label: 'Tuteur', value: 'Hugo DURET' },
                { label: 'Durée', value: '3 ans (alternance)' },
                { label: 'École', value: 'EPSI Bordeaux' },
                { label: 'Diplôme', value: 'RNCP Niveau 7 – EISI' },
              ].map(({ label, value }) => (
                <div key={label} className="flex justify-between items-start gap-2 pb-2 border-b border-white/5 last:border-0 last:pb-0">
                  <span className="text-slate-500 flex-shrink-0">{label}</span>
                  <span className="text-slate-200 text-right text-xs">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="card border-blue-500/30">
            <div className="text-xs text-blue-400 font-semibold uppercase tracking-wider mb-3">Compétences visées</div>
            <div className="flex flex-wrap gap-1.5">
              {['Full Stack Dev', 'Gestion de projet', 'Architecture SI', 'Agile/Scrum', 'Analyse des risques', 'React/TS', 'Electron'].map(t => (
                <span key={t} className="text-xs text-slate-300 bg-blue-500/10 border border-blue-500/20 rounded-full px-2 py-0.5">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
