import { Config } from 'jest';
import { name as appName } from './package.json';

const config: Config =  {
  clearMocks: true,
  displayName: appName,
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.ts?(x)'],
  verbose: true,
};

export default config;