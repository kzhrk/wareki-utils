module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [],
  parserOptions: {
    sourceType: 'module',
    parser: '@typescript-eslint/parser',
  },
  // add your custom rules here
  rules: {
    'comma-dangle': 'off',
    '@typescript-eslint/comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
        enums: 'always-multiline',
        generics: 'always-multiline',
        tuples: 'always-multiline',
      },
    ],
    semi: ['error', 'always'],
  },
};