module.exports = {
  preset: 'react-native',
  collectCoverage: true,
  collectCoverageFrom: ["./src/**", "./App.tsx"],
  coverageThreshold: {
    global: {
      lines: 90
    }
  }
};
