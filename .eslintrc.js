// module.exports = {
//   parser: '@typescript-eslint/parser',
//   plugins: ['@typescript-eslint', 'prettier'],
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/eslint-recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:@typescript-eslint/recommended-requiring-type-checking',
//     'plugin:prettier/recommended',
//     'prettier',
//   ],
//   rules: {
//     'linebreak-style': 0,
//     'import/prefer-default-export': 0,
//     'import/extensions': 0,
//     'no-use-before-define': 0,
//     'import/no-unresolved': 0,
//     'react/react-in-jsx-scope': 0,
//     'import/no-extraneous-dependencies': 0,
//     'no-shadow': 0,
//     'react/prop-types': 0,
//     'react/jsx-filename-extension': [
//       2,
//       { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
//     ],
//     'jsx-a11y/no-noninteractive-element-interactions': 0,
//     '@typescript-eslint/explicit-module-boundary-types': 0,
//     prettier: [
//       'error',
//       {
//         endOfLine: 'auto',
//       },
//     ],
//     quotes: [2, 'single'],
//     '@typescript-eslint/await-thenable': 'error',
//   },
//   settings: {
//     'import/resolver': {
//       node: {
//         extensions: ['.js', '.jsx', '.ts', '.tsx'],
//       },
//     },
//   },
// };
module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    'no-use-before-define': 0,
    'import/no-unresolved': 0,
    'react/react-in-jsx-scope': 0,
    'import/no-extraneous-dependencies': 0,
    'no-shadow': 0,
    'react/prop-types': 0,
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
