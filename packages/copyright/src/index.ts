import react from './react'
import { CopyrightClassComponent as classComponent, CopyrightFuncComponent as funcComponent } from './vanilla'
import dataSet from './dataset'
import { copyright as core } from './core'

const Copyright = Object.assign({}, { react, classComponent, funcComponent, dataSet, core })

export default Copyright
