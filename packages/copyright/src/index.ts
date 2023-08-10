import react from './react'
import { CopyrightClassComponent as classComponent, CopyrightFuncComponent as funcComponent } from './vanilla'
import { copyright as core } from './core'

const Copyright = Object.assign({}, { react, classComponent, funcComponent, core })

export default Copyright
