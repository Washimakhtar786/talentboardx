module.exports = {
  testEnvironment: "node",

  transform: {
    "^.+\\.js$": "babel-jest",
  },

  testMatch: ["**/__tests__/**/*.test.js"],

  moduleFileExtensions: ["js"],

  collectCoverageFrom: [
    "src/**/*.js",
    "!src/server.js",
  ],

  coverageDirectory: "coverage",

  clearMocks: true,
};