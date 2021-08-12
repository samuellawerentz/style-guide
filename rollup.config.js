import babel from '@rollup/plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
import del from 'rollup-plugin-delete'
import pkg from './package.json'
import postcss from 'rollup-plugin-postcss'
import { uglify } from 'rollup-plugin-uglify'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  input: 'src/index.js',
  output: [
    { file: pkg.main, format: 'cjs', sourcemap: true },
    { file: pkg.module, format: 'esm', sourcemap: true },
  ],
  plugins: [
    external(),
    babel({
      exclude: 'node_modules/**',
    }),
    postcss(),
    uglify(),
    del({ targets: ['dist/*'] }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
}
