import { ReactElement } from 'react'

export type TCopyright = {
  years?: number[] | undefined
  year?: number | undefined
  current?: boolean | undefined
  copymark?: string | boolean
}

export interface IReact extends TCopyright {
  style?: string
  className?: string
  children?: ReactElement | ReactElement[]
}

export interface IVanilla extends TCopyright {
  element: string | null
}
