import React, { ReactElement } from 'react'
import { copyright } from '../core'
import { TCopyright } from '../types'

interface ICopyright extends TCopyright {
  style?: string
  className?: string
  children?: ReactElement
}

const Copyright = ({ style, className, children, copymark, year, years, current }: ICopyright) => {
  return (
    <div className={style || className}>
      {children} {copyright({ copymark, year, years, current })}
    </div>
  )
}

export default Copyright
