import js from '@eslint/js'
import globals from 'globals'

export default [
  { ignores: ['node_modules', 'dist'] },
  {
    files: ['**/*.js'],
    ...js.configs.recommended,
    languageOptions: {
      globals: {
        ...globals.browser,
        // Globals defined in data.js and consumed by main.js via separate <script> tags
        ALBUM_TITLE: 'readonly',
        TIMELINE: 'readonly',
      },
      ecmaVersion: 2022,
    },
  },
  {
    // data.js declares globals consumed by main.js via a separate <script> tag —
    // they are intentionally "unused" from a single-file perspective.
    files: ['js/data.js'],
    rules: {
      'no-unused-vars': 'off',
    },
  },
]
