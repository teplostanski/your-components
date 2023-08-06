import { TCopyright } from '../types'

const getYearsString = (array: number[]) => {
  const size = 2
  const subarray = []
  for (let i = 0; i < Math.ceil(array.length / size); i++) {
    subarray[i] = array.sort().slice(i * size, i * size + size)
  }
  return subarray.map(([first, second]) => (second ? ` ${first}-${second}` : ` ${first}`)).toString()
}

const getCurrentYear = (year: number | undefined, current: boolean) => {
  const currentYear = new Date().getFullYear()
  if (!year && current) {
    return currentYear
  } else if (year && current) {
    return `${year}-${currentYear}`
  } else {
    return year
  }
}

export const copyright = ({ years = [], year, current = true, copymark = String.fromCodePoint(0x000a9) }: TCopyright) =>
  `${copymark ? copymark : ''}${getYearsString(years)} ${getCurrentYear(year, current)}`
