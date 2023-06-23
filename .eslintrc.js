module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    require.resolve('eslint-config-airbnb'),
    require.resolve('eslint-config-airbnb/hooks'),
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/jsx-runtime'
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort', 'import', '@nova'],
  rules: {
    'no-use-before-define': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        vars: 'all',
        ignoreRestSiblings: false,
      },
    ],
    'no-shadow': 'off',
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.tsx'],
      },
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: 'block-like',
      },
      {
        blankLine: 'always',
        prev: 'block-like',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: ['const', 'let'],
        next: ['block-like', 'expression']
      },
    ],
    'object-property-newline': 'error',
    'sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: true,
        natural: false,
      },
    ],
    'object-curly-newline': [
      'error',
      {
        ObjectPattern: {
          multiline: true,
        },
        ExportDeclaration: {
          multiline: true,
          minProperties: 3,
        },
      },
    ],
    'lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: true,
      },
    ],
    'padded-blocks': [
      'error',
      {
        classes: 'always',
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        '': 'never',
        js: 'never',
        json: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'implicit-arrow-linebreak': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'linebreak-style': 'off',
    'max-len': [
      'error',
      {
        code: 120,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreUrls: true,
      },
    ],
    'no-console': 'error',
    'no-debugger': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxBOF: 0,
        maxEOF: 0,
      },
    ],
    quotes: ['error', 'single'],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'react-hooks/exhaustive-deps': 'off',
    'react-hooks/rules-of-hooks': 'warn',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-shadow': 'error',
  },
  settings: {
    'import/extensions': ['.ts', '.tsx', '.json'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.json'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.tsx'],
      },
    },
    react: {
      pragma: 'React',
      version: 'detect',
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'simple-import-sort/imports': [
          'error',
          {
            groups: [
              ['^react', '^@?\\w'],

              ['^(shared)(/.*|$)'],

              ['^(app)(/.*|$)'],

              ['^(processes)(/.*|$)'],
              ['^(widgets)(/.*|$)'],
              ['^(pages)(/.*|$)'],

              ['^(entities)(/.*|$)'],
              ['^(features)(/.*|$)'],

              ['^(#server/routes)(/.*|$)'],

              // Side effect imports.
              ['^\\u0000'],
              ['^.+\\.?(css)$'],
            ],
          },
        ],
      },
    },
    {
      files: './src/**/**.+(ts|tsx)',
      rules: {
        '@nova/feature-slice-isolation': [
          'error',
          {
            layers: {
              1: 'app',
              2: 'processes',
              3: 'pages',
              4: 'widgets',
              5: 'features',
              6: 'entities',
              7: 'shared',
            },
          },
        ],
        '@nova/alias-import-paths': [
          'error',
          {
            paths: [
              {
                ignoredFolders: [],
                allowSameFolder: true,
                rootDir: './src',
                prefix: '.',
              },
            ],
          },
        ],
      },
    },
    {
      files: './server/**/**.ts',
      rules: {
        '@nova/alias-import-paths': [
          'error',
          {
            paths: [
              {
                ignoredFolders: [],
                allowSameFolder: true,
                rootDir: 'server/src',
                prefix: '#server',
              },
            ],
          },
        ],
      },
    },
    {
      files: ['src/**/*.test.ts', 'src/**/*.test.tsx', 'server/**/*.test.ts'],
      plugins: ['jest', 'jest-formatting', 'testing-library'],
      extends: [
        'plugin:jest/recommended',
        'plugin:jest-formatting/recommended',
        'plugin:testing-library/react',
      ],
      rules: {}
    }
  ],
};
