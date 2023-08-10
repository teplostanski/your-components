import { copyright } from '../../core'
import { IVanilla } from '../../types'

class Copyright {
  year: string | number | undefined
  years: string | number[] | undefined
  current: string | boolean | undefined
  copymark: string | boolean | undefined
  element: string | null

  constructor({ year, years, current, copymark, element }: IVanilla) {
    this.year = year
    this.years = years
    this.current = current
    this.copymark = copymark
    this.element = element

    const $element: HTMLElement | null = document.getElementById(`${this.element}`)
    $element
      ? ($element.innerHTML = `${$element.innerHTML} ${copyright({
          year: this.year,
          years: this.years,
          current: this.current,
          copymark: this.copymark,
        })}`)
      : null
  }
}

export default Copyright
