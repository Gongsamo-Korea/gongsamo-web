import nextJest from 'next/jest';
import { name as appName } from './package.json';

const createJestConfig = nextJest({
  dir: './',
});

const config = {
  clearMocks: true,
  displayName: appName,
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.ts?(x)'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  verbose: true,
};

export default createJestConfig(config);
