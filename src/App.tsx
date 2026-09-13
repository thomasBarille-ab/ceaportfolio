import { useState, useEffect, useCallback } from 'react'
import './index.css'
import Navigation from './components/Navigation'
import TitleSlide from './slides/TitleSlide'
import CEASlide from './slides/CEASlide'
import NacreContextSlide from './slides/NacreContextSlide'
import NacreTechSlide from './slides/NacreTechSlide'
import NacreDefiSlide from './slides/NacreDefiSlide'
import QPOCContextSlide from './slides/QPOCContextSlide'
import QPOCTechSlide from './slides/QPOCTechSlide'
import QPOCDefiSlide from './slides/QPOCDefiSlide'
import MSPRContextSlide from './slides/MSPRContextSlide'
import MSPRTechSlide from './slides/MSPRTechSlide'
import MSPRDefiSlide from './slides/MSPRDefiSlide'
import SkillsSlide from './slides/SkillsSlide'
import ConclusionSlide from './slides/ConclusionSlide'

const SLIDES = [
  TitleSlide,
  CEASlide,
  NacreContextSlide,
  NacreTechSlide,
  NacreDefiSlide,
  QPOCContextSlide,
  QPOCTechSlide,
  QPOCDefiSlide,
  MSPRContextSlide,
  MSPRTechSlide,
  MSPRDefiSlide,
  SkillsSlide,
  ConclusionSlide,
]

export default function App() {
  const [current, setCurrent] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  const goTo = useCallback((idx: number) => {
    if (idx < 0 || idx >= SLIDES.length) return
    setDirection(idx > current ? 'next' : 'prev')
    setCurrent(idx)
    setAnimKey(k => k + 1)
  }, [current])

  const next = useCallback(() => goTo(current + 1), [current, goTo])
  const prev = useCallback(() => goTo(current - 1), [current, goTo])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || e.key === ' ') {
        e.preventDefault(); next()
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault(); prev()
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [next, prev])

  const SlideComponent = SLIDES[current]

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden" style={{ background: '#12100e' }}>
      <div
        key={animKey}
        className={direction === 'next' ? 'slide-enter' : 'slide-enter-prev'}
        style={{ flex: 1, minHeight: 0 }}
      >
        <SlideComponent />
      </div>
      <Navigation
        current={current}
        total={SLIDES.length}
        onNext={next}
        onPrev={prev}
        onGoto={goTo}
      />
    </div>
  )
}
