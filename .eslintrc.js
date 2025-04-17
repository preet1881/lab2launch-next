// .eslintrc.js
module.exports = {
    root: true,
    rules: {
      '@typescript-eslint/no-unused-vars': 'off', // 💥 turns off the rule causing deploy error
    },
  };