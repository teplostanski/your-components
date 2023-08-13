import { TCopyright } from '../types'

const getRangeYears = (array: any[]) => {
  return array.map(([first, second]) => (second ? ` ${first}-${second}` : ` ${first}`))
}

const validationYear = (year: number) => {
  const yearRegEx = /^[1-2][0-9]{3}$/

  if (year.toString().match(yearRegEx)) {
    if (year >= 1960 && year <= 2099) {
      return year
    } else {
      throw new Error(`${year} is not a valid year. The value should be from 1960 to 2099.`)
    }
  } else {
    throw new Error(`${year} is not a year.`)
  }
}

const stringToYearsArray = (string: string, separator: number): number[] => {
  const stringOfNumbers = string.replace(/[^0-9]/gm, '')
  return stringOfNumbers.length ? [validationYear(Number(stringOfNumbers.slice(0, separator))), ...stringToYearsArray(stringOfNumbers.slice(separator), separator)] : []
}

const getYearsString = (value: number[] | string) => {
  let array: number[] = []
  const subarray: any[] = []
  const size = 2

  if (Array.isArray(value)) {
    array = value
  } else if (typeof value === 'string') {
    array = stringToYearsArray(value, 4)
  }

  for (let i = 0; i < Math.ceil(array.length / size); i++) {
    subarray.push(array.sort().slice(i * size, i * size + size))
  }

  return getRangeYears(subarray).toString()
}

const getCurrentYear = (year: number | string | undefined, current: boolean | string) => {
  const currentYear = new Date().getFullYear()
  let validYear: number | undefined

  if (typeof year === 'string') {
    validYear = validationYear(Number(year))
  } else if (typeof year === 'number') {
    validYear = validationYear(year)
  }

  if (typeof current === 'string') {
    if (current === 'false') {
      return validYear
    } else {
      throw new Error(`'${current}' is not a valid. The string value should only be 'false'.`)
    }
  } else if (typeof current === 'boolean') {
    if (!validYear && current) {
      return currentYear
    } else if (validYear && current) {
      return `${validYear}-${currentYear}`
    } else {
      return validYear
    }
  } else {
    throw new Error(`The value can be boolean or a string with the value 'false'`)
  }
}

export const copyright = ({ years = [], year, current = true, copymark = String.fromCodePoint(0x000a9) }: TCopyright) => {
  try {
    return `${copymark ? copymark : ''}${getYearsString(years)} ${getCurrentYear(year, current)}`
  } catch (error) {
    return error
  }
}
