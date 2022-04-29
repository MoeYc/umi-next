import { Config, createConfig } from 'umi/test';

export default {
  ...createConfig(),
  testMatch: ['**/packages/*/src/**/*.test.ts'],
  modulePathIgnorePatterns: [
    '<rootDir>/packages/.+/compiled',
    '<rootDir>/packages/.+/fixtures',
  ],
  cacheDirectory: '.jest-cache',
  reporters: ['default', process.env.CI && 'github-actions'].filter(Boolean),
} as Config.InitialOptions;
