module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended'
  ],
  overrides: [
    {
      env: {
        node: true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
    tsconfigRootDir: './'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-indent': [2, 2],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/no-explicit-any': ['warn', { ignoreRestArgs: true }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
    'strict-null-checks/all': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off'
  }
}
