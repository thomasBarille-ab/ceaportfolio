import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  accent?: string
  className?: string
}

export default function SlideLayout({ children, accent = '#3b82f6', className = '' }: Props) {
  return (
    <div
      className={`relative w-full h-full flex flex-col grid-circuit overflow-hidden ${className}`}
      style={{ background: '#0a0f1e' }}
    >
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: accent }} />

      {/* Corner glow */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: accent, transform: 'translate(30%, -30%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: accent, transform: 'translate(-30%, 30%)' }}
      />

      <div className="relative z-10 flex flex-col h-full px-16 py-12">
        {children}
      </div>
    </div>
  )
}
