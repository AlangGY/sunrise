module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', 'prettier'],
  ignorePatterns: ['/.storybook/*.jsx'],
  rules: {
    'no-var': 'error',
    semi: 'error',
    'prefer-const': 'error',
    'no-self-assign': ['error', { props: true }],
    'object-shorthand': ['error', 'always'],
    eqeqeq: ['error', 'always'],
    'lines-between-class-members': ['error', 'always'],
    'no-new-func': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'newline-before-return': 'error',
    'prefer-template': 'error',
    'space-infix-ops': 'error',
    'no-fallthrough': ['error'],
    'no-multiple-empty-lines': 'error',
    'eol-last': 'error'
  }
};
