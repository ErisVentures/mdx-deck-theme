import babel from 'rollup-plugin-babel'
import peerDeps from 'rollup-plugin-peer-deps-external'
import nodeResolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/theme.js',
  output: {
    exports: 'named',
    file: 'dist/theme.js',
    format: 'cjs',
    sourcemap: true
  },
  plugins: [nodeResolve(), peerDeps(), babel()]
}
