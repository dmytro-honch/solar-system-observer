
module.exports = {
  root: true,
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:react/recommended', 'plugin:jsx-a11y/recommended', 'plugin:prettier/recommended', 'eslint-config-airbnb-base', 'eslint-config-airbnb-typescript', 'plugin:storybook/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', '@typescript-eslint'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'react/react-in-jsx-scope': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/order': 'off',
    'max-len': ['error', { code: 120, 'ignoreTemplateLiterals': true, 'ignoreStrings': true, 'ignoreComments': true, 'ignoreRegExpLiterals': true }],
    'react/no-unescaped-entities': 0,
    'object-curly-newline': 'off',
    'react-hooks/exhaustive-deps': 'warn',
    'no-duplicate-imports': 'error',
    'no-param-reassign': ['error', { 'props': true, 'ignorePropertyModificationsFor': ['state'] }],
    'import/no-extraneous-dependencies': ['error', {'devDependencies': ['**/src/setupTestEnv.ts', '**/*.test.tsx', '**/*.test.ts', '**/*.stories.tsx']}],
  },
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      node: {
        path: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
      }
    }
  },
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
