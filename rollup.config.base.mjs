/**
 * @type {import('rollup').RollupOptions}
 */
import { existsSync, rmSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';

import tsPlugin from '@rollup/plugin-typescript';
import dstPlugin from 'rollup-plugin-dts';

const require = createRequire(import.meta.url);
const packageDir = process.env.PACKAGE_DIR;
const packageJSON = require(`./${packageDir}/package.json`);

const clearDir = (dir) => {
  const dirPath = join(packageDir, dir);
  if (dir && existsSync(dirPath)) {
    rmSync(dirPath, { recursive: true, force: true });
    console.log(`cleared: ${dirPath}`);
  }
}

const mapInputs = (srcFiles) => {
  return Object.fromEntries(
    srcFiles.map(file => [file.replace(/^(\.\/)?src\//, '').replace(/(\.d)?\.[cm]?(js|ts)$/, ''), join(packageDir, file)])
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
      tsPlugin({
        tsconfig: join(packageDir, 'tsconfig.json'),
      })
    ],
  }
}

const declarationOptions = (options) => {
  const { entrypoints, outDir } = options;

  return {
    input: mapInputs(entrypoints),
    plugins: [
      dstPlugin()
    ],
    // external: [/\.d\.ts$/],
    output: [
      {
        format: 'esm',
        dir: outDir,
        generatedCode: 'es2015',
        ...fileNames('d.mts'),
        preserveModules: true,
        preserveModulesRoot: 'src'
      },
      {
        format: 'cjs',
        dir: outDir,
        generatedCode: 'es2015',
        ...fileNames('d.ts'),
        preserveModules: true,
        preserveModulesRoot: 'src',
      }
    ]
  }
}

export default (cmdArgs) => {
  console.log('cmdArgs', cmdArgs);
  const entrypoints = Object.values(packageJSON.exports).filter(f => /^(\.\/)?src\//.test(f) && f.endsWith('.ts'));

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
    }),

    declarationOptions({
      entrypoints,
      outDir: `${packageDir}/dist`,
    }),
  ]

}



