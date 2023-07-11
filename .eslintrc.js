module.exports = {
	// 전역 변수 사용을 정의 (참고: https://eslint.org/docs/latest/user-guide/configuring#specifying-environments )
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	// 서드파티 플러그인
	plugins: ['react', '@typescript-eslint'],

	// extends는 추가한 플러그인에서 사용할 규칙을 설정합니다.
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'next/core-web-vitals', //  Core Web Vitals 규칙 세트 와 함께 Next.js의 기본 ESLint 구성을 포함합니다 .
		'prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {},
};
