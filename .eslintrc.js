module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': 2,
    'consistent-return': 0,
    'import/no-extraneous-dependencies': 2,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'no-unused-vars': 0,
    'prettier/prettier': 2,
  },
};
