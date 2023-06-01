/* eslint-disable eqeqeq */
import { TAwesomeCopyright } from './types'
import React from 'react'

const CopyrightReact = (props: TAwesomeCopyright) => {
  const copyDefault = String.fromCodePoint(0x000a9)
  const currentYear = new Date().getFullYear()

  const years = (from: number | string | undefined, only: boolean | undefined) => {
    if (from == undefined) {
      return currentYear
    } else if (only || from == currentYear) {
      return `${from}`
    } else {
      return `${from} - ${currentYear}`
    }
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
