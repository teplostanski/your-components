import React from 'react'
import { copyright } from '../core'
import { IReact } from '../types'

const Copyright = ({ style, className, children, copymark, year, years, current }: IReact) => {
  return (
    <span className={className} style={style}>
      {children} {copyright({ copymark, year, years, current })}
    </span>
  )
}

export default Copyright
