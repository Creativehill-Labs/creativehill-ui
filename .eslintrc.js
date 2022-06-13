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
  },
};
