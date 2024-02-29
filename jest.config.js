// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest');

const createJestConfig = nextJest({
	dir: './',
});

const customJestConfig = {
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.json',
			diagnostics: true,
		},
		NODE_ENV: 'test',
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],

	// Transform TypeScript files using ts-jest
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
	},

	// Match the module path aliases from tsconfig.json
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/$1',
		'^@core/(.*)$': '<rootDir>/src/@core/$1',
		'^.+\\.(svg)$': '<rootDir>/__mocks__/svg.tsx',
	},

	testEnvironment: 'jest-environment-jsdom',
	collectCoverageFrom: ['src/utils/**/*.{js,ts,tsx}', 'src/components/features/**/*.{ts,tsx}', 'src/hooks/*.{ts,tsx}', 'src/stores/**/*.{ts,tsx}'],
	coverageReporters: ['lcov', 'text'],
};

module.exports = createJestConfig(customJestConfig);
