import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import eslintPluginImport from 'eslint-plugin-import'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname
})

const eslintConfig = [
  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  {
    plugins: {
      import: eslintPluginImport
    },
    settings: {
      'import/resolver': {
        typescript: {
          project: './tsconfig.json'
        }
      }
    }
  },
  {
    files: ['src/entities/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@app/**', '@features/**', '@pages/**'],
              message: 'Entities can use only imports from Shared'
            }
          ]
        }
      ]
    }
  },
  {
    files: ['src/shared/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@app/**', '@features/**', '@pages/**', '@entities/**'],
              message: 'Shared layer must not have imports from any layer'
            }
          ]
        }
      ]
    }
  },
  {
    files: ['src/features/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@app/**', '@features/**', '@pages/**'],
              message: 'Feature layer can have imports from Shared and Entities'
            }
          ]
        }
      ]
    }
  }
]

export default eslintConfig
