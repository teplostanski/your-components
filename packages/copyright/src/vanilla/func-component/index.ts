import { copyright } from '../../core'
import { IVanilla } from '../../types'

const Copyright = ({ year, years, current, copymark, element }: IVanilla) => {
  const _element: HTMLElement | null = document.getElementById(`${element}`)

  _element
    ? (_element.innerHTML = `${_element.innerHTML} ${copyright({
        year: year,
        years: years,
        current: current,
        copymark: copymark,
      })}`)
    : null
}

export default Copyright
