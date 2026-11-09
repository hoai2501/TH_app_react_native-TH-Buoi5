module.exports = {
  preset: '@react-native/jest-preset',
  transform: {
    '^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|@react-native-async-storage|@react-navigation|@firebase|firebase|react-native-vector-icons)/)',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
};
