module.exports = {
  extends: [
    '@creativehill-labs/eslint-config-creativehill',
    'plugin:storybook/recommended',
  ],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.stories.tsx'] },
    ],
    'guard-for-in': 'off',
  },
};
