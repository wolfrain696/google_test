module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  ignorePatterns: [
    'config',
    'jest',
    'jest.config.js',
    '.eslintrc.js'
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
    'plugin:import/errors',
    "plugin:prettier/recommended",
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  plugins: ['prettier', '@typescript-eslint', 'react-hooks', 'import'],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        arrowParens: 'avoid',
        trailingComma: 'es5',
        tabWidth: 2,
        singleQuote: true,
        printWidth: 100,
      },
    ],

    'no-console': 'warn',
    'no-nested-ternary': 'error',
    'no-debugger': 'warn',
    'arrow-body-style': ['error', 'as-needed'],

    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    '@typescript-eslint/consistent-type-assertions': [
      'error',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-unused-vars': 'error',

    'react/display-name': 'off',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',

    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],

    'sort-imports': ['error', { ignoreDeclarationSort: true }],
  },
};
