module.exports = {
  roots: ['<rootDir>/src'],
  preset: 'ts-jest',

  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    './jest.setup.ts',
  ],

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',

  // Module file extensions for importing

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom',
}
