import SlideLayout from '../components/SlideLayout'

const companyInfo = [
  { label: 'Effectif', value: '210 personnes' },
  { label: 'Création', value: '1980 (PME familiale)' },
  { label: 'Activité', value: 'Composants électroniques (B2B + particuliers)' },
  { label: 'Sites', value: '3 entrepôts + 4 points de vente + Madrid' },
  { label: 'Certification', value: 'ISO 9001 (hors IT)' },
  { label: 'Défi', value: 'Rachat Madrid → harmonisation SI' },
]

const methodology = [
  { n: '1', label: 'Analyse du contexte', tools: 'PESTEL, SWOT, Benchmark, Diagnostic SI' },
  { n: '2', label: 'Stratégie SI', tools: 'Gouvernance, Cartographie 4 niveaux' },
  { n: '3', label: 'Gestion des risques', tools: 'Méthode EBIOS, Matrice des risques, KPIs' },
  { n: '4', label: 'Optimisation & durabilité', tools: 'Lean IT, Green IT, Veille technologique' },
]

const obsolescence = [
  { sys: 'ERP Finance/RH', level: 'Élevée', pct: 85 },
  { sys: 'Logiciel Planning', level: 'Élevée', pct: 80 },
  { sys: 'SI Madrid', level: 'Élevée', pct: 90 },
  { sys: 'Excel (intensif)', level: 'Élevée', pct: 75 },
  { sys: 'CRM', level: 'Moyenne', pct: 50 },
  { sys: 'Site E-commerce', level: 'À évaluer', pct: 40 },
]

export default function MSPRContextSlide() {
  return (
    <SlideLayout accent="#8b5cf6">
      {/* Header */}
      <div className="shrink-0 mb-5">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-500/15 text-purple-400 border border-purple-500/30">Projet 3 / 3</span>
          <span className="text-slate-500 text-sm">Projet académique — EPSI</span>
        </div>
        <h2 className="text-3xl font-bold text-white">MSPR</h2>
        <p className="text-slate-400 text-sm mt-1">Optimisation du Système d'Information de K-Electronik</p>
      </div>

      {/* Body */}
      <div className="flex-1 min-h-0 flex gap-5">

        {/* Left */}
        <div className="flex-1 min-h-0 flex flex-col gap-4">
          {/* Company */}
          <div className="shrink-0 bg-white/5 border border-purple-500/25 rounded-2xl p-4">
            <p className="text-xs text-purple-400 font-semibold uppercase tracking-wider mb-2.5">K-ElectroniK — Contexte</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {companyInfo.map(({ label, value }) => (
                <div key={label}>
                  <p className="text-xs text-slate-500">{label}</p>
                  <p className="text-slate-200 text-xs mt-0.5">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Methodology */}
          <div className="flex-1 min-h-0 bg-white/5 border border-purple-500/25 rounded-2xl p-4 overflow-hidden">
            <p className="text-xs text-purple-400 font-semibold uppercase tracking-wider mb-2.5">Démarche méthodologique (équipe de 4)</p>
            <div className="space-y-2.5">
              {methodology.map(({ n, label, tools }) => (
                <div key={n} className="flex gap-3 items-start">
                  <span className="w-5 h-5 rounded-md bg-purple-500/20 text-purple-400 flex items-center justify-center text-xs font-bold shrink-0">{n}</span>
                  <div>
                    <p className="text-white text-xs font-medium">{label}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{tools}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: SI obsolescence */}
        <div className="w-72 shrink-0">
          <div className="h-full bg-white/5 border border-purple-500/25 rounded-2xl p-4 flex flex-col overflow-hidden">
            <p className="text-xs text-purple-400 font-semibold uppercase tracking-wider mb-3 shrink-0">Diagnostic SI — Obsolescence</p>
            <div className="flex-1 min-h-0 flex flex-col justify-between overflow-hidden">
              {obsolescence.map(({ sys, level, pct }) => (
                <div key={sys}>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-300">{sys}</span>
                    <span className={pct > 70 ? 'text-red-400' : pct > 45 ? 'text-amber-400' : 'text-slate-400'}>{level}</span>
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
            <p className="text-xs text-slate-500 mt-3 pt-3 border-t border-white/10 shrink-0">
              Diagnostic : performances, sécurité et conformité RGPD de chaque système.
            </p>
          </div>
        </div>
      </div>
    </SlideLayout>
  )
}
