import svgs from '../assets/svgs'

export const getTechnologySvgUrl = (technology: string) => {
  return svgs[technology.toLowerCase()] || null
}