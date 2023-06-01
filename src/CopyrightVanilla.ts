export interface ICopyright {
  element: HTMLDivElement
  creatorStyle?: string
  copyStyle?: string
  messageStyle?: string
  yearStyle?: string
  message?: string
  styles?: string
  creator?: string
  copy?: any
  year?: number | string
  yearOnly?: boolean
}

const CopyrightVanilla = (args: ICopyright) => {
  const currentYear = new Date().getFullYear()

  const years = (from: number | string, only: boolean) => {
    return only || from == currentYear ? `${from}` : `${from} - ${currentYear}`
  }

  const { element, year, yearOnly, message, creator, copy, yearStyle, messageStyle, copyStyle, creatorStyle } =
    Object.assign(
      {
        element: 'HTML Element',
        year: currentYear,
        yearOnly: false,
        message: '',
        creator: '',
        copy: String.fromCodePoint(0x000a9),
        yearStyle: '',
        messageStyle: '',
        copyStyle: '',
        creatorStyle: '',
      },
      args,
    )
  element.insertAdjacentHTML('beforeend', `<span class=${messageStyle}>${message}</span> `)
  element.insertAdjacentHTML('beforeend', `<span class=${creatorStyle}>${creator}</span> `)
  element.insertAdjacentHTML('beforeend', `<span class=${copyStyle}>${copy}</span> `)
  element.insertAdjacentHTML('beforeend', `<span class=${yearStyle}>${years(year, yearOnly)}</span> `)
}

export default CopyrightVanilla
