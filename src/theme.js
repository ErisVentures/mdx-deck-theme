import theme from 'mdx-deck/themes'

import { code, header } from './fonts'
import colors from './colors'
import codeTheme from './code-theme'

export * from './layouts'

export default {
  ...theme,
  font: header.join(','),
  monospace: code.join(','),
  transitionTimingFunction: 'linear',
  transitionDuration: '0s',
  colors: {
    background: colors.background,
    heading: colors.primary
  },
  blockquote: {
    color: colors.primary,
    paddingLeft: '2rem',
    borderLeft: `5px solid ${colors.primary}`
  },
  paragraph: {
    color: colors.primary
  },
  li: {
    color: colors.primary
  },
  prism: {
    style: codeTheme
  }
}
