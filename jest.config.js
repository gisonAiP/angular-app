module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup.jest.ts'],
  collectCoverage: true,
  coverageReporters: ['html', "text", "cobertura"],
  coverageDirectory: 'test_output/coverage',
  coveragePathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/tests/'
  ],
  reporters: [
    "default",
    [
      "jest-junit",
      {
        classNameTemplate: (vars) => {
          return vars.classname.toUpperCase();
        },
        "outputDirectory": "test_output",
        "outputName": "test_report.xml"
      }
    ]
  ],
  globals: {
    'ts-jest': {
      isolatedModules: true,
    }
  },
  testResultsProcessor: "jest-junit",
  testPathIgnorePatterns: [
    '<rootDir>/dist/',
    '<rootDir>/node_modules/',
    '<rootDir>/tests/'
  ],
  transform: {
    '^.+\\.(ts|html)$': 'ts-jest',
    '^.+\\.js$': 'babel-jest'
  },
  transformIgnorePatterns: ['/node_modules/(?!@commandcentral|@ng-bootstrap|@msi|lodash-es)'],
};
