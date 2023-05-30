/* eslint-disable eqeqeq */
import React from 'react'
//import React from 'react'

export type IAwesomeCopyright = {
  creatorStyle?: string
  copyStyle?: string
  messageStyle?: string
  yearStyle?: string
  message?: string
  styles?: string
  creator?: string
  copy?: any
  year: number | string
  yearOnly: boolean
}

const CopyrightReact = (props: IAwesomeCopyright) => {
  const copyDefault = String.fromCodePoint(0x000a9)

  const years = (from: number | string, only: boolean) => {
    const to = new Date().getFullYear()
    return only || from == to ? `${from}` : `${from} - ${to}`
  }

  console.log(years(2023, false))

  return (
    <div className={props.styles}>
      <span className={props.messageStyle}>{props.message}</span>{' '}
      <span className={props.creatorStyle}>{props.creator || ''}</span>{' '}
      <span className={props.copyStyle}>{props.copy || copyDefault}</span>{' '}
      <span className={props.yearStyle}>{years(props.year, props.yearOnly)}</span>{' '}
    </div>
  )
}

export default CopyrightReact
