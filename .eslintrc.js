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
    'prefer-destructuring': [
      'error',
      {
        array: false,
        object: true
      },
      { enforceForRenamedProperties: true }
    ],
    'no-self-assign': ['error', { props: true }],
    'object-property-newline': [
      'error',
      { allowAllPropertiesOnSameLine: false }
    ],
    'object-shorthand': ['error', 'always'],
    eqeqeq: ['error', 'always'],
    'lines-between-class-members': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'no-new-func': 'error',
    'prefer-arrow-callback': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'implicit-arrow-linebreak': ['error', 'beside'],
    'newline-before-return': 'error',
    'template-curly-spacing': ['error', 'never'],
    'prefer-template': 'error',
    'space-infix-ops': 'error',
    'default-case': ['error', { commentPattern: '^no\\sdefault' }],
    'no-fallthrough': ['error'],
    'no-multiple-empty-lines': 'error',
    'eol-last': 'error',
    'no-multi-spaces': 'error'
  }
};
