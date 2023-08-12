import { copyright } from '../core'

class Copyright extends HTMLElement {
  rendered: boolean | undefined
  constructor() {
    super()
    this.innerHTML = ` ${this.render()} ${this.innerHTML}`
  }

  render() {
    const getAttributeValue = (prop: string) => {
      let attribute: string | null = ''

      this.hasAttribute(`${prop}`) ? (attribute = this.getAttribute(`${prop}`)) : (attribute = '')

      return attribute
    }

    const year = getAttributeValue('year')
    const years = getAttributeValue('years')
    const current = getAttributeValue('current')
    const copymark = getAttributeValue('copymark')

    return copyright({
      year: year || undefined,
      years: years || undefined,
      current: current || undefined,
      copymark: copymark || undefined,
    })
  }

  connectedCallback() {
    if (!this.rendered) {
      this.render()
      this.rendered = true
    }
  }
}

customElements.define('your-copyright', Copyright)
