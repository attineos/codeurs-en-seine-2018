module.exports = {
  extends: 'eslint-config-airbnb',

  parser: 'babel-eslint',

  rules: {
    'linebreak-style': [ 'error', 'unix' ],
    'flowtype/space-after-type-colon': [ 2, 'always', { allowLineBreak: true } ],
    'jsx-a11y/href-no-hash': 0,
    'jsx-a11y/iframe-has-title': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-noninteractive-tabindex': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/jsx-no-target-blank': 0,
    'array-bracket-spacing': [ 2, 'always' ],
    'arrow-body-style': [ 2, 'as-needed' ],
    'arrow-parens': 0,
    'class-methods-use-this': 0,
    'comma-dangle': [ 2, 'always-multiline' ],
    'consistent-return': 0,
    'default-case': 0,
    'dot-notation': 0,
    'func-names': 0,
    'global-require': 0,
    'key-spacing': [ 2, { mode: 'strict' } ],
    'max-len': 0,
    'new-cap': 0,
    'no-case-declarations': 0,
    'no-confusing-arrow': 0,
    'no-console': 2,
    'no-extra-boolean-cast': 0,
    'no-lonely-if': 0,
    'no-mixed-operators': 0,
    'no-multi-spaces': 2,
    'no-nested-ternary': 0,
    'no-param-reassign': 0,
    'no-plusplus': 0,
    'no-prototype-builtins': 0,
    'no-restricted-syntax': 0,
    'no-return-assign': 0,
    'no-shadow': 0,
    'no-throw-literal': 0,
    'no-underscore-dangle': 0,
    'no-unused-expressions': 0,
    'no-unused-vars': [ 2, { varsIgnorePattern: '^debug$' } ],
    'no-use-before-define': 0,
    'no-useless-escape': 0,
    'no-void': 0,
    'object-curly-spacing': [ 2, 'always' ],
    'object-shorthand': 0,
    'one-var': 0,
    'operator-assignment': 0,
    'padded-blocks': [ 2, { classes: 'always', switches: 'never' } ],
    'quote-props': [ 2, 'as-needed' ],
    'space-before-function-paren': [2, 'always'],
    'space-in-parens': [ 2, 'never' ],
    'vars-on-top': 0,
    camelcase: 0,
    eqeqeq: 0,
    indent: [ 2, 2, { SwitchCase: 1 } ],
    quotes: [ 2, 'single' ],
    radix: 0,
    semi: [ 2, 'never' ],
    strict: 0,

    'import/no-unresolved': 0,
    'import/extensions': 0,
    'import/first': 0,
    'import/no-dynamic-require': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,

    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/mouse-events-have-key-events': 0,
    'jsx-a11y/no-autofocus': 0,
    'jsx-a11y/no-static-element-interactions': 0,

    'react/destructuring-assignment': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-boolean-value': [ 2, 'never' ],
    'react/jsx-closing-bracket-location': 0,
    'react/jsx-curly-spacing': [ 2, 'never', { allowMultiline: false } ],
    'react/jsx-filename-extension': 0,
    'react/jsx-indent-props': [ 2, 2 ],
    'react/jsx-key': 2,
    'react/jsx-no-bind': 0,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-uses-react': 2,
    'react/no-danger': 0,
    'react/no-did-mount-set-state': 0,
    'react/no-did-update-set-state': 0,
    'react/no-multi-comp': 0,
    'react/prefer-es6-class': 2,
    'react/prefer-stateless-function': 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
    'react/sort-comp': [
      2,
      {
        order: [
          'static-methods',
          '/^_.+$/',
          'state',
          'constructor',
          'lifecycle',
          '/^(on|handle).+$/',
          '/^(get|set).+$/',
          '/^is.+$/',
          'everything-else',
          '/^render.+$/',
          'render',
        ],
        groups: {
          lifecycle: [
            'getDerivedStateFromProps',
            'componentWillMount',
            'componentDidMount',
            'componentWillReceiveProps',
            'shouldComponentUpdate',
            'componentWillUpdate',
            'componentDidUpdate',
            'componentWillUnmount',
          ],
        },
      },
    ],
  },
}