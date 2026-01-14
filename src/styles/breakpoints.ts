export const breakpointsNumber = {
  sm: 320,
  mobile: 428,
  md: 768,
  lm: 800,
  lg: 960,
  xl: 1200,
  '2xl': 1536,
  '3xl': 1700,
}

export const breakpoints = Object.entries(breakpointsNumber).reduce(
  (acc, [key, value]) => {
    return { ...acc, [key]: `${value}px` }
  },
  {} as {
    [key in keyof typeof breakpointsNumber]: string
  }
)
