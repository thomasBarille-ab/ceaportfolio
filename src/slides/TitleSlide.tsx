import SlideLayout from '../components/SlideLayout'

export default function TitleSlide() {
  return (
    <SlideLayout accent="#3b82f6">
      <div className="flex flex-col items-center justify-center h-full text-center gap-8 animate-fade-in">

        {/* Badge */}
        <div className="flex items-center gap-3 text-sm text-slate-400 border border-slate-700 rounded-full px-5 py-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span>Dossier RNCP Niveau 7 — Expert en Informatique et Système d'Information</span>
        </div>

        {/* Name */}
        <div>
          <h1 className="text-7xl font-bold tracking-tight text-white leading-none">
            Thomas <span className="text-blue-400">Barille</span>
          </h1>
          <p className="mt-4 text-xl text-slate-400">EPSI Bordeaux · Promotion EISI 2025</p>
        </div>

        {/* CEA badge */}
        <div className="flex items-center justify-center gap-6 mt-2">
          <div className="flex flex-col items-center gap-1">
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <span className="text-xs text-slate-500">Full Stack Dev</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/30 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h6"/><path d="M9 12h6"/><path d="M9 15h4"/>
              </svg>
            </div>
            <span className="text-xs text-slate-500">Gestion Projet</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
              </svg>
            </div>
            <span className="text-xs text-slate-500">Stratégie SI</span>
          </div>
        </div>

        {/* CEA info */}
        <div className="mt-4 flex items-center gap-4 text-slate-400 text-sm">
          <span>3 ans d'alternance</span>
          <span className="text-slate-600">·</span>
          <span className="text-blue-400 font-medium">CEA Tech Occitanie</span>
          <span className="text-slate-600">·</span>
          <span>Tuteur : Hugo Duret</span>
        </div>

        {/* Hint */}
        <p className="absolute bottom-20 text-xs text-slate-600 tracking-widest uppercase">
          Appuyer sur → pour naviguer
        </p>
      </div>
    </SlideLayout>
  )
}
