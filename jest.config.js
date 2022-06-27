module.exports = {
  setupFilesAfterEnv: ['./__tests__/setup.js'],
  testMatch: ['<rootDir>/app/javascript/**/*.test.js?(x)'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
  },
  moduleNameMapper: {
    '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__tests__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/mocks/fileMock.js',
  },
};
