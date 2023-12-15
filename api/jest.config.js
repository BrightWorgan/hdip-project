module.exports = {
  roots: ["<rootDir>/test"],
  globalSetup: "<rootDir>/test.setup.ts",
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
};
