import { resolve } from 'path'
import babel from 'rollup-plugin-babel'
import peerDeps from 'rollup-plugin-peer-deps-external'
import nodeResolve from 'rollup-plugin-node-resolve'
import alias from 'rollup-plugin-alias'

const chromeColors = resolve(__dirname, 'src/chrome-colors.js')

export default {
  input: 'src/chrome-theme.js',
  output: {
    exports: 'named',
    file: 'dist/chrome-theme.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [
    alias({
      colors: chromeColors,
      './colors': chromeColors,
      '../colors': chromeColors
    }),
    nodeResolve(),
    peerDeps(),
    babel()
  ]
}
