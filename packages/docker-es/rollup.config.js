import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
// import analyze from 'rollup-plugin-analyzer';
import clear from 'rollup-plugin-clear';
import { dts } from 'rollup-plugin-dts';
// import obfuscator from 'rollup-plugin-obfuscator';
import terser from '@rollup/plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        sourcemap: true
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        sourcemap: true
      },
      {
        file: 'dist/index.umd.js',
        format: 'umd',
        name: 'dockerjs',
        sourcemap: true
      }
    ],
    plugins: [
      clear({
        targets: ['dist', 'lib'],
        watch: true
      }),
      resolve({
        browser: true
      }),
      commonjs({
        include: /\/node_modules\//
      }),
      json(),
      typescript({ tsconfig: 'tsconfig.json' }),
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
