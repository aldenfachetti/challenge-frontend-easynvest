const { defaults } = require('jest-config')

module.exports = {
  verbose: true,
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.js?'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  modulePathIgnorePatterns: ['./dist'],
  moduleFileExtensions: [...defaults.moduleFileExtensions, 'js'],
  transform: {
    '^.+\\.(js)$': 'babel-jest'
  }
}
