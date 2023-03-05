module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(m)?(t|j)s$',
  modulePathIgnorePatterns : [
    "build",
  ],
  transform: {
    '^.+\\.m?[tj]s?$': ['ts-jest', { 
      tsconfig: "tsconfig.cjs.json"
    }]
  },
}