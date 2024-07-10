module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom/jest-globals', '@testing-library/jest-dom', './jest.setup.cjs'],
    transform: {
        '^.+\\.ts$': 'ts-jest',
        '^.+\\.tsx$': 'ts-jest',
    },
    moduleNameMapper: {
        '^src/(.*)$': '<rootDir>/src/$1',
        '\\.(css)$': 'identity-obj-proxy',
    },
    transformIgnorePatterns: [
        '/node_modules/',
        '^.+\\.css$',
    ],
};
