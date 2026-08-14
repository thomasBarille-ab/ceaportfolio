export interface Slide {
  id: string
  component: string
}

export const SLIDES: Slide[] = [
  { id: 'title',       component: 'TitleSlide' },
  { id: 'cea',         component: 'CEASlide' },
  { id: 'nacre-ctx',   component: 'NacreContextSlide' },
  { id: 'nacre-tech',  component: 'NacreTechSlide' },
  { id: 'nacre-defi',  component: 'NacreDefiSlide' },
  { id: 'qpoc-ctx',    component: 'QPOCContextSlide' },
  { id: 'qpoc-tech',   component: 'QPOCTechSlide' },
  { id: 'qpoc-defi',   component: 'QPOCDefiSlide' },
  { id: 'mspr-ctx',    component: 'MSPRContextSlide' },
  { id: 'mspr-tech',   component: 'MSPRTechSlide' },
  { id: 'mspr-defi',   component: 'MSPRDefiSlide' },
  { id: 'skills',      component: 'SkillsSlide' },
  { id: 'conclusion',  component: 'ConclusionSlide' },
]
