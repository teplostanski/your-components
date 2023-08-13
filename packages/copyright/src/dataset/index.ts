import { copyright } from '../core'
import { IDataset } from '../types'

const dataSet = (value: string | string[]) => {
  let array = []

  if (typeof value === 'string') {
    array.push(value)
  } else if (Array.isArray(value)) {
    array = value
  } else {
    throw new Error(`${JSON.stringify(value)} is not a valid value. The value must be a string or an array of strings.`)
  }

  array.forEach((item) => {
    const selector: IDataset | null = document.querySelector(item)

    selector
      ? (selector.innerHTML = `${selector.innerHTML} ${copyright({
          year: selector.dataset.year,
          years: selector.dataset.years,
          current: selector.dataset.current,
          copymark: selector.dataset.copymark,
        })}`)
      : null
  })
}

export default dataSet
