const TEST_REGEX = '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$';

module.exports = {
	setupFiles: ['<rootDir>/jest.setup.js'],
	testRegex: TEST_REGEX,
	transform: {
		'^.+\\.tsx?$': 'babel-jest'
	},
	testPathIgnorePatterns: [
		'<rootDir>/.next/',
		'<rootDir>/coverage/',
		'<rootDir>/dist/',
		'<rootDir>/docs/',
		'<rootDir>/node_modules/'
	],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
	collectCoverage: true
};
