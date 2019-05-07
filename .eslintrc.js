module.exports = {
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module"
  },
  "env": {
    "browser": true,
  },
  "extends": ["standard", "plugin:vue/base"],
  "rules": {
    "space-before-function-paren": 0,
    "semi": [
      "error",
      "always"
    ]
  }
};
