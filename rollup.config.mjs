/**
 * @type {import('rollup').RollupOptions}
 */

import resolve from '@rollup/plugin-node-resolve';
import tsPlugin from '@rollup/plugin-typescript';



const packageDir = process.env.PACKAGE_DIR;

export default {
  input: `${packageDir}/src/index.ts`,
  output: [
    {
      file: '${packageDir}/dist/index.esm.js',
      format: 'esm',
      sourcemap: true
    },
    {
      file: '${packageDir}/dist/index.cjs.js',
      format: 'cjs',
      sourcemap: true
    }
  ],
  plugins: [
    tsPlugin()
  ]
}