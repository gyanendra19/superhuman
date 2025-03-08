import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',  // Use ts-jest to handle TypeScript
  testEnvironment: 'jsdom',  // Required for React component testing
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',  // Transform TypeScript & JSX
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],  // Run setup before tests
  transformIgnorePatterns: [
    '/node_modules/', // Ignore node_modules from transformations
  ],
};

export default config;
