//import { TCopyright } from '../types'
//interface ICopyright extends TCopyright {
//  element: string
//}

//const copyright = (args: ICopyright) => {
//  const currentYear = new Date().getFullYear()

//  const years = (from: number | string, only: boolean) => {
//    return only || from == currentYear ? `${from}` : `${from} - ${currentYear}`
//  }

//  const { element, year, yearOnly, message, creator, copy, yearStyle, messageStyle, copyStyle, creatorStyle } =
//    Object.assign(
//      {
//        element: 'HTML Element',
//        year: currentYear,
//        yearOnly: false,
//        message: '',
//        creator: '',
//        copy: String.fromCodePoint(0x000a9),
//        yearStyle: '',
//        messageStyle: '',
//        copyStyle: '',
//        creatorStyle: '',
//      },
//      args,
//    )
//  const el = document.querySelector<HTMLDivElement>(element)!
//  el.insertAdjacentHTML('beforeend', `<span class=${messageStyle}>${message}</span> `)
//  el.insertAdjacentHTML('beforeend', `<span class=${creatorStyle}>${creator}</span> `)
//  el.insertAdjacentHTML('beforeend', `<span class=${copyStyle}>${copy}</span> `)
//  el.insertAdjacentHTML('beforeend', `<span class=${yearStyle}>${years(year, yearOnly)}</span> `)
//}

//export default copyright
