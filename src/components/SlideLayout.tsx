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
      <div className="absolute top-0 inset-x-0 h-0.5 z-20" style={{ background: accent }} />
      <div
        className="absolute top-0 right-0 rounded-full pointer-events-none"
        style={{
          width: 480, height: 480,
          background: accent, opacity: 0.07,
          filter: 'blur(80px)',
          transform: 'translate(40%,-40%)',
        }}
      />
      <div
        className="absolute bottom-0 left-0 rounded-full pointer-events-none"
        style={{
          width: 360, height: 360,
          background: accent, opacity: 0.05,
          filter: 'blur(80px)',
          transform: 'translate(-40%,40%)',
        }}
      />
      <div className="relative z-10 flex-1 min-h-0 flex flex-col px-12 py-7">
        {children}
      </div>
    </div>
  )
}
