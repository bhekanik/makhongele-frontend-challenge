/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  clearMocks: true,
  collectCoverageFrom: [
    '<rootDir>/src/**/*.ts',
    '<rootDir>/src/**/*.tsx',
    '!<rootDir>/src/pages/**/*.ts',
    '!<rootDir>/src/pages/**/*.tsx',
    '!<rootDir>/src/graphql/**/*.ts',
    '!<rootDir>/src/graphql/**/*.tsx',
  ],
  coverageDirectory: 'coverage',
  automock: false,
  setupFiles: ['./testUtils/setupJest.ts'],
  moduleNameMapper: {
    '^src/(.*)': '<rootDir>/src/$1',
  },
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
  },
};
