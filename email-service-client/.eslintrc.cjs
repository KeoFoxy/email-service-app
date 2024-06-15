module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'airbnb-typescript',
  ],
  ignorePatterns: [
    '*.svg',
  ],
  env: {
    browser: true,
    jest: true,
    es6: true,
  },
  plugins: [
    'react',
    'react-hooks',
    'jsx-a11y',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  rules: {
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    'object-property-newline': 'off',
    'quote-props': 'off',
    'yoda': [
      'error',
      'always',
      {
        'onlyEquality': true
      }
    ],
    'no-lonely-if': 'off',
    'comma-dangle': [
      'error',
      {
        'arrays': 'always-multiline',
        'objects': 'always-multiline',
        'imports': 'always-multiline',
        'exports': 'always-multiline',
        'functions': 'always-multiline'
      }
    ],
    'indent': [
      'error',
      2,
      {
        'SwitchCase': 1
      }
    ],
    'max-len': [
      'error',
      {
        'code': 140,
        'ignorePattern': "import \\{?\\s?.*\\s?\\}? from '.*';",
        'ignoreStrings': true,
        'ignoreTemplateLiterals': true
      }
    ],
    'prefer-template': 'error',
    'newline-per-chained-call': 'off',
    'arrow-body-style': 'off',
    'curly': [
      'error',
      'all'
    ],
    'object-curly-newline': 'off',
    'valid-jsdoc': 'off',
    'require-jsdoc': 'off',
    'class-methods-use-this': 'off',
    'arrow-parens': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-useless-escape': 'warn',
    'camelcase': 'off',
    'max-classes-per-file': 'warn',
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 2,
        'maxBOF': 0,
        'maxEOF': 0
      }
    ],
    'import/no-cycle': 'off',
    'import/extensions': 'warn',
    'import/first': [
      2,
      'disable-absolute-first'
    ],
    'import/newline-after-import': [
      2,
      {
        'count': 2
      }
    ],
    'import/no-extraneous-dependencies': 'off',
    'import/no-webpack-loader-syntax': 'warn',
    'import/order': [
      2,
      {
        'groups': [
          [
            'builtin',
            'external'
          ],
          [
            'internal'
          ],
          [
            'index',
            'sibling',
            'parent'
          ]
        ],
        'newlines-between': 'always'
      }
    ],
    'import/no-unresolved': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        'argsIgnorePattern': '^_'
      }
    ],
    'import/imports-first': 'off',
    'import/prefer-default-export': 'off',
    'import/no-named-as-default': 'off',
    'import/no-named-as-default-member': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/mouse-events-have-key-events': 'off',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'react/prefer-stateless-function': 'off',
    'react/jsx-filename-extension': 'off',
    'react/self-closing-comp': 'off',
    'react/require-extension': 'off',
    'react/sort-comp': [
      'warn',
      {
        'order': [
          'static-methods',
          'lifecycle',
          'everything-else',
          'rendering'
        ],
        'groups': {
          'rendering': [
            '/^render.+$/',
            'render'
          ]
        }
      }
    ],
    'react/destructuring-assignment': [
      'warn',
      'always',
      {
        'ignoreClassFields': true
      }
    ],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/default-props-match-prop-types': [
      'error',
      {
        'allowRequiredDefaults': true
      }
    ],
    'react/forbid-prop-types': 'off',
    'react/jsx-indent': 'warn',
    'react/no-array-index-key': 'warn',
    'react/jsx-fragments': [
      'error',
      'element'
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/static-property-placement': [
      'error',
      'static public field'
    ],
    'react/state-in-constructor': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/no-throw-literal': 'off',
    'no-underscore-dangle': 'off',
    'no-console': ['error', { 'allow': ['warn', 'error'] }],
    'consistent-return': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'no-mixed-operators': 'off',
    'react/jsx-no-bind': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    '@typescript-eslint/naming-convention': [
      'off',
      { 'format': ['snake_case'] }
    ],
    'react-redux/useSelector-prefer-selectors': 'off',
    'prefer-destructuring': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'jsx-a11y/interactive-supports-focus': 'off',
    'no-param-reassign': ['error', { 'props': true, 'ignorePropertyModificationsFor': ['state'] }],
    '@typescript-eslint/indent': 'off',
    'jsx-a11y/no-autofocus': 'off',
    'no-nested-ternary': 'off',
    '@typescript-eslint/default-param-last': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-useless-fragment': 'off'
  },
  overrides: [
    {
      files: [
        '**/*.stories.*',
      ],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
};