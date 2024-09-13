import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';


import { existsSync, rmSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';

import tsPlugin from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';

const require = createRequire(import.meta.url);
const packageDir = process.env.PACKAGE_DIR;
const packageJSON = require(`./${packageDir}/package.json`);



const entrypoints = join(packageDir, 'src/index.ts')


const clearDir = (dir) => {
  const dirPath = join(packageDir, dir);
  if (dir && existsSync(dirPath)) {
    rmSync(dirPath, { recursive: true, force: true });
    console.log(`cleared: ${dirPath}`);
  }
}

clearDir('dist');



export default [
  // JS/TS 打包配置
  {
    input: entrypoints,             // 打包的入口文件
    output: [
      {
        dir: 'dist',
        format: 'cjs',                 // CommonJS 输出格式
        entryFileNames: '[name].js',   // CommonJS 文件名规则
        sourcemap: true                // 启用 sourcemap 文件
      },
      {
        dir: 'dist',
        format: 'esm',                 // ES Module 输出格式
        entryFileNames: '[name].mjs',  // ES Module 文件名规则
        sourcemap: true                // 启用 sourcemap 文件
      }
    ],
    plugins: [
      // resolve(),                       // 解析 Node.js 模块的插件
      // commonjs(),                      // 将 CommonJS 模块转换为 ES6 模块的插件
      tsPlugin({
        tsconfig: `${packageDir}/tsconfig.json`,   // 使用自定义的 tsconfig
        declaration: false,            // 在 JS/TS 打包时，不生成 .d.ts 文件（在另一配置中处理）
        rootDir: `${packageDir}/src`
      }),
    ]
  },
  // DTS 文件打包配置
  // {
  //   input: `${packageDir}/dist/types/index.d.ts`,    // 入口 .d.ts 文件
  //   output: [
  //     {
  //       file: 'dist/index.d.ts',
  //       format: 'es'
  //     },
  //     {
  //       file: 'dist/index.d.mts',
  //       format: 'es'
  //     }
  //   ],
  //   plugins: [
  //     dts()                            // 处理 .d.ts 类型声明的插件
  //   ]
  // }
];
