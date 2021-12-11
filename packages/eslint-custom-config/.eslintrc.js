module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true
  },
  extends: [
    'airbnb-base',
    'plugin:jsdoc/recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaFeatures: {
      modules: true
    },
    sourceType: 'module'
  },
  plugins: [
    'jsdoc',
    'import',
    'jsx-a11y',
    'react',
    'react-hooks',
    'jest',
    'prettier',
    'simple-import-sort',
    'sort-destructure-keys',
    'sort-keys-fix',
    'react-hooks'
  ],
  root: true,
  rules: {
    'arrow-body-style': 0,
    camelcase: 0,
    'class-methods-use-this': 0,
    'comma-dangle': [2, 'never'],
    'default-case': 0,
    'global-require': 0,
    'implicit-arrow-linebreak': 0,
    'import/extensions': [
      0,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never'
      }
    ],
    'import/no-dynamic-require': 0,
    'import/order': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/anchor-is-valid': [
      2,
      {
        aspects: ['invalidHref', 'preferButton'],
        components: ['Link'],
        specialLink: ['hrefLeft', 'hrefRight']
      }
    ],
    'no-shadow': 0,
    'object-curly-newline': 0,
    'prettier/prettier': [
      2,
      {
        trailingComma: 'none'
      }
    ],
    quotes: 2,
    'react-hooks/exhaustive-deps': 1,
    'react-hooks/rules-of-hooks': 2,
    'react/jsx-filename-extension': 0,
    'react/jsx-key': 2,
    'react/jsx-props-no-spreading': 0,
    'react/no-unused-prop-types': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/require-default-props': 0,
    'simple-import-sort/imports': [
      2,
      {
        groups: [
          ['^@?\\w'],
          ['@/'],
          ['(?=.*.interface$)'],
          ['(?=.*.const$)'],
          ['(?=.*.spec$)'],
          [
            '^\\u0000',
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$'
          ]
        ]
      }
    ],
    'sort-destructure-keys/sort-destructure-keys': [
      2,
      {
        caseSensitive: false
      }
    ],
    'sort-imports': 0,
    'sort-keys-fix/sort-keys-fix': 2
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
