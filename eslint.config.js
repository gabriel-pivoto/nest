const js = require('@eslint/js')
const tseslint = require('typescript-eslint')

module.exports = tseslint.config(
  {
    ignores: ['dist'],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
    rules: {
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
)
