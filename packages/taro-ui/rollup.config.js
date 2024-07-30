import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
// import analyze from 'rollup-plugin-analyzer';
import clear from 'rollup-plugin-clear';
import copy from 'rollup-plugin-copy';
import { dts } from 'rollup-plugin-dts';
// import obfuscator from 'rollup-plugin-obfuscator';
import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/index.js',
      format: 'es',
      sourcemap: true
    },
    external: [
      'react',
      'react-dom',
      '@tarojs/components',
      '@tarojs/runtime',
      '@tarojs/taro',
      '@tarojs/react'
    ],
    plugins: [
      clear({
        targets: ['dist', 'lib'],
        watch: true
      }),
      resolve(),
      commonjs({
        include: /\/node_modules\//
      }),
      json(),
      typescript({ tsconfig: 'tsconfig.json' }),
      copy({
        verbose: true,
        targets: [
          {
            src: 'src/styles',
            dest: 'dist'
          }
        ]
      }),
      terser()
      // obfuscator(),
      // analyze({ summaryOnly: true })
    ]
  },
  {
    input: 'src/index.d.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'es'
      }
    ],
    plugins: [dts()]
  }
];
