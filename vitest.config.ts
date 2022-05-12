import { configDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    // include: ['./playground/**/*.spec.[tj]s'],
    include: ['./packages/*/src/**/*.test.ts'],
    exclude: [
      ...configDefaults.exclude,
      './packages/*/compiled',
      './packages/*/fixtures',
    ],
    testTimeout: process.env.CI ? 50000 : 20000,
    // setupFiles: ['./setupBefore.ts'],
    setupFiles: ['./setup.ts'],
    // globalSetup: ['./setupFile.ts'],
    // setupFiles: ['./setupFile.js'],
    // threads: false,
    // env: {
    //   NODE_ENV: 'test'
    // }
  },
  esbuild: {
    target: 'node14',
    // exclude: ['**/compiled/**/*.js']
    format: 'cjs',
    // loader: 'ts'
  },
});
