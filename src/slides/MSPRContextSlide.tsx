import SlideLayout from '../components/SlideLayout'

export default function MSPRContextSlide() {
  return (
    <SlideLayout accent="#8b5cf6">
      <div className="animate-slide-up">
        <div className="flex items-center gap-3 mb-4">
          <span className="tag bg-purple-500/20 text-purple-400 border border-purple-500/30">Projet 3 / 3</span>
          <span className="text-slate-500 text-sm">Projet académique — EPSI</span>
        </div>
        <h2 className="text-4xl font-bold text-white mb-1">MSPR</h2>
        <p className="text-slate-400 text-lg">Optimisation du Système d'Information de K-Electronik</p>
      </div>

      <div className="flex gap-8 flex-1 mt-8">
        {/* Left: company context */}
        <div className="flex-1 flex flex-col gap-4 animate-slide-right">
          <div className="card border-purple-500/30">
            <div className="text-xs text-purple-400 font-semibold uppercase tracking-wider mb-3">K-ElectroniK — Contexte</div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              {[
                { label: 'Effectif', value: '210 personnes' },
                { label: 'Création', value: '1980 (PME familiale)' },
                { label: 'Activité', value: 'Composants électroniques (B2B + particuliers)' },
                { label: 'Sites', value: '3 entrepôts (Est Paris) + 4 points de vente + Madrid' },
                { label: 'Certification', value: 'ISO 9001 (hors IT)' },
                { label: 'Défi', value: 'Rachat entreprise Madrid → harmonisation SI' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="text-slate-200 text-xs mt-0.5">{value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="card border-purple-500/30 flex-1">
            <div className="text-xs text-purple-400 font-semibold uppercase tracking-wider mb-3">Démarche méthodologique (en équipe de 4)</div>
            <div className="space-y-3">
              {[
                { num: '1', label: 'Analyse du contexte', tools: 'PESTEL, SWOT, Benchmark, Diagnostic SI (obsolescence, maturité)' },
                { num: '2', label: 'Stratégie SI', tools: 'Gouvernance, Cartographie 4 niveaux, Processus métier' },
                { num: '3', label: 'Gestion des risques', tools: 'Méthode EBIOS, Matrice des risques, KPIs' },
                { num: '4', label: 'Optimisation & durabilité', tools: 'Lean IT, Green IT, Veille technologique structurée' },
              ].map(({ num, label, tools }) => (
                <div key={num} className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold flex-shrink-0">{num}</span>
                  <div>
                    <p className="text-white text-sm font-medium">{label}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{tools}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: SI obsolescence */}
        <div className="w-80 animate-slide-left">
          <div className="card border-purple-500/30 h-full flex flex-col">
            <div className="text-xs text-purple-400 font-semibold uppercase tracking-wider mb-3">Diagnostic SI — Obsolescence</div>
            <div className="space-y-2 flex-1">
              {[
                { sys: 'ERP Finance/RH', level: 'Élevée', pct: 85 },
                { sys: 'Logiciel Planning Prod.', level: 'Élevée', pct: 80 },
                { sys: 'SI Madrid', level: 'Élevée', pct: 90 },
                { sys: 'Excel (intensif)', level: 'Élevée', pct: 75 },
                { sys: 'CRM', level: 'Moyenne', pct: 50 },
                { sys: 'Site E-commerce', level: 'À évaluer', pct: 40 },
              ].map(({ sys, level, pct }) => (
                <div key={sys}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">{sys}</span>
                    <span className={`${pct > 70 ? 'text-red-400' : pct > 45 ? 'text-amber-400' : 'text-slate-400'}`}>{level}</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/10">
                    <div
                      className={`h-full rounded-full ${pct > 70 ? 'bg-red-500' : pct > 45 ? 'bg-amber-500' : 'bg-purple-500'}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/10 text-xs text-slate-400">
              Diagnostic conduit par analyse des performances, sécurité et conformité (RGPD) de chaque système.
            </div>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
