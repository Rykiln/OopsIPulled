module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'max-len': 'off',
    'no-await-in-loop': 'off',
    'no-console': 'off',
    'no-tabs': 'off',
    'no-unused-vars': ['error', { args: 'none' }],
    'import/no-dynamic-require': 'off',
  },
};
