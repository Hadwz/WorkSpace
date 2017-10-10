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
            'tab'
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            "off",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],

        'no-console': 'off',

        'no-unused-vars': 'warn',

        'no-mixed-spaces-and-tabs': 'off',

        'no-undef': 'warn',
    }
};