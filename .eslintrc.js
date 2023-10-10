module.exports = {
  // 전역 변수 사용을 정의 (참고: https://eslint.org/docs/latest/user-guide/configuring#specifying-environments )
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  // 서드파티 플러그인
  plugins: ['react', '@typescript-eslint'],
  // extends는 추가한 플러그인에서 사용할 규칙을 설정합니다.
  extends: ["eslint:recommended", "plugin:react/recommended", "plugin:@typescript-eslint/recommended", "next/core-web-vitals", "prettier", "plugin:storybook/recommended"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    "@typescript-eslint/no-unused-vars": "off",
  }
};