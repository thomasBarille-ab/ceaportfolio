import SlideLayout from '../components/SlideLayout'

const icons = [
  {
    label: 'Full Stack Dev', color: '#3b82f6',
    path: <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></>,
  },
  {
    label: 'Gestion Projet', color: '#10b981',
    path: <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6"/><path d="M9 12h6"/><path d="M9 15h4"/></>,
  },
  {
    label: 'Stratégie SI', color: '#8b5cf6',
    path: <><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></>,
  },
]

export default function TitleSlide() {
  return (
    <SlideLayout accent="#3b82f6">
      <div className="flex-1 min-h-0 flex flex-col items-center justify-center text-center gap-6">

        <div className="flex items-center gap-3 text-xs text-slate-400 border border-slate-700 rounded-full px-5 py-2 shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shrink-0" />
          Dossier RNCP Niveau 7 — Expert en Informatique et Système d'Information
        </div>

        <div className="shrink-0">
          <h1 className="text-6xl font-bold tracking-tight text-white leading-none">
            Thomas <span className="text-blue-400">Barille</span>
          </h1>
          <p className="mt-3 text-lg text-slate-400">EPSI Bordeaux · Promotion EISI 2025</p>
        </div>

        <div className="flex items-center justify-center gap-6 shrink-0">
          {icons.map(({ label, color, path }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center"
                style={{ background: `${color}15`, border: `1px solid ${color}35` }}
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  {path}
                </svg>
              </div>
              <span className="text-xs text-slate-500">{label}</span>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-4 text-slate-400 text-sm shrink-0">
          <span>3 ans d'alternance</span>
          <span className="text-slate-700">·</span>
          <span className="text-blue-400 font-medium">CEA Tech Occitanie</span>
          <span className="text-slate-700">·</span>
          <span>Tuteur : Hugo Duret</span>
        </div>

        <p className="text-xs text-slate-600 tracking-widest uppercase shrink-0">
          Appuyer sur → pour naviguer
        </p>
      </div>
    </SlideLayout>
  )
}
