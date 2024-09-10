/**
 * @type {import('rollup').RollupOptions}
 */

import { createRequire } from 'node:module';
import { join } from 'node:path';

import resolve from '@rollup/plugin-node-resolve';
import tsPlugin from '@rollup/plugin-typescript';
import cjs from '@rollup/plugin-commonjs';
import alias from '@rollup/plugin-alias';
import { existsSync, rmSync } from 'node:fs';

const require = createRequire(import.meta.url);

const packageDir = process.env.PACKAGE_DIR;

const packageJSON = require(`./${packageDir}/package.json`);

const testPatters = ['**/*.spec.ts', '**/*.test.ts'];

console.log('packageDir', packageDir);


const clearDir = (dir) => {
  const dirPath = join(packageDir, dir);
  if (dir && existsSync(dirPath)) {
    rmSync(dirPath, { recursive: true, force: true });
    console.log(`cleared: ${dirPath}`);
  }
}

const mapInputs = (srcFiles) => {
  return Object.fromEntries(
    srcFiles.map(file => [file.replace(/^(\.\/)?src\//, '').replace(/\.[cm]?(js|ts)$/, ''), join(packageDir, file)])
  );
}

const fileNames = (extension = 'js') => {
  return {
    entryFileNames: `[name].${extension}`,
    chunkFileNames: `_chunk/[name]-[hash:6].${extension}`,
  }
}

const libBuildOptions = (options) => {
  const { entrypoints, extension, format, outDir, sourcemap } = options;

  return {
    input: mapInputs(entrypoints),
    output: {
      format,
      dir: outDir,
      sourcemap,
      ...fileNames(extension),
      preserveModules: true,
      generatedCode: 'es2015',
      hoistTransitiveImports: false
    },
    plugins: [
      // resolve(),
      alias({
        entries: [
          { find: '@', replacement: `..` }, // 解析你的 tsconfig 路径别名
        ],
      }),
      tsPlugin({
        tsconfig: join(packageDir, 'tsconfig.json'),
        // compilerOptions: {
        //   sourceMap: sourcemap,
        //   inlineSources: sourcemap || undefined,
        //   removeComments: false,
        //   declaration: false
        // },
        // exclude: [...testPatters],
      })
    ]
  }
}


export default (cmdArgs) => {
  console.log('cmdArgs', cmdArgs);

  const entrypoints = Object.values(packageJSON.exports).filter(f => /^(\.\/)?src\//.test(f) && f.endsWith('.ts'));
  const inputs = mapInputs(entrypoints);
  console.log('inputs', inputs);

  clearDir('dist');

  return [
    libBuildOptions({
      entrypoints,
      format: 'esm',
      extension: 'mjs',
      outDir: `${packageDir}/dist`,
      sourcemap: false
    }),

    libBuildOptions({
      entrypoints,
      format: 'cjs',
      extension: 'js',
      outDir: `${packageDir}/dist`,
      sourcemap: false
    })
  ]

}



