import intro from './topics/intro.mdx'
import overview from './topics/overview.mdx'
import newFeatures from './topics/new-features.mdx'
import demo from './topics/demo.mdx'
import qAndA from './topics/q-and-a.mdx'
import conclusion from './topics/conclusion.mdx'

export { default as theme } from '../dist/theme.js'
export default [
  ...intro,
  ...overview,
  ...newFeatures,
  ...demo,
  ...qAndA,
  ...conclusion
]
