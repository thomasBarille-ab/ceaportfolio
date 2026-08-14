interface Props {
  current: number
  total: number
  onPrev: () => void
  onNext: () => void
  onGoto: (i: number) => void
}

const PROJECT_RANGES = [
  { label: 'NACRE', start: 2, end: 4, color: '#10b981' },
  { label: 'Quick POC', start: 5, end: 7, color: '#f59e0b' },
  { label: 'MSPR', start: 8, end: 10, color: '#8b5cf6' },
]

export default function Navigation({ current, total, onPrev, onNext, onGoto }: Props) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-4"
      style={{ background: 'rgba(10,15,30,0.85)', backdropFilter: 'blur(12px)', borderTop: '1px solid rgba(255,255,255,0.08)' }}>

      {/* Slide counter */}
      <span className="text-slate-500 text-sm font-mono w-20">
        {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
      </span>

      {/* Dot navigation */}
      <div className="flex items-center gap-1.5">
        {Array.from({ length: total }).map((_, i) => {
          const proj = PROJECT_RANGES.find(p => i >= p.start && i <= p.end)
          const color = proj ? proj.color : '#3b82f6'
          const active = i === current
          return (
            <button
              key={i}
              onClick={() => onGoto(i)}
              title={proj?.label}
              className="transition-all duration-200 rounded-full"
              style={{
                width: active ? 24 : 8,
                height: 8,
                background: active ? color : 'rgba(255,255,255,0.2)',
                cursor: 'pointer',
              }}
            />
          )
        })}
      </div>

      {/* Arrows */}
      <div className="flex items-center gap-3 w-20 justify-end">
        <button
          onClick={onPrev}
          disabled={current === 0}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Previous"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          onClick={onNext}
          disabled={current === total - 1}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          aria-label="Next"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
