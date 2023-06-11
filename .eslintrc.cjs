module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['react-refresh'],
  rules: {
    'prettier/prettier': ['error', {}, {usePrattierrc: true}],
    'react-refresh/only-export-components': 'warn',
    'import/no-unresolved': 'off',
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        path: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  env: {
    browser: true,
    es2020: true,
    node: true
  },
}
