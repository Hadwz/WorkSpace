module.exports = {
  "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "jquery": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
      "sourceType": "module"
  },
  globals: {
      Vue: true,
      wx: true
    },
  "rules": {
      "indent": [
          "error",
           "tab"
      ],
      "linebreak-style": [
          "off",
          "windows"
      ],
      "quotes": [
          "off",
          "single"
      ],
      "semi": [
          "warn",
          "always"
      ],

      //console.log可用
      'no-console': 'off',

      //未使用声明
      'no-unused-vars': 'warn',

      'no-mixed-spaces-and-tabs': 'off',

      //必须声明
      'no-undef': 'warn',

      //禁止使用eval
      "no-eval": 'error', 

      //禁止使用new Object()
      "no-new-object": 'error',

      //禁用with
      "no-with": 2,

      //强制驼峰法命名
      "camelcase": 'error',

      //必须全等
      "eqeqeq": 'error',
  }
};