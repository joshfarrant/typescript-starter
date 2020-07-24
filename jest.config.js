module.exports = {
  testEnvironment: 'node',
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  moduleFileExtensions: [
    "ts",
    "js",
    "json",
    "node",
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$',
  testPathIgnorePatterns: [
    '/node_modules/',
  ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{ts,js}',
    '!src/**/*.d.ts',
  ],
};
