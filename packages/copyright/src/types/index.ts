import { ReactElement } from 'react'

export type TCopyright = {
  years?: number[] | string | undefined
  year?: number | string | undefined
  current?: boolean | string | undefined
  copymark?: string | boolean
}

export interface IReact extends TCopyright {
  style?: object | undefined
  className?: string
  children?: ReactElement | ReactElement[]
}

export interface IVanilla extends TCopyright {
  element: string | null
}

export interface IDataset extends Element {
  dataset: any
}
