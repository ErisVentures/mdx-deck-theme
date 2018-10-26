import theme from 'mdx-deck/themes'
import prismTheme from 'react-syntax-highlighter/styles/prism/ghcolors'

import { code, header } from './fonts'
import colors from './colors'

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
    style: prismTheme
  }
}
