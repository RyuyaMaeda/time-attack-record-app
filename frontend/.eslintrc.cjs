module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:@typescript-eslint/recommended",
    "plugin:promise/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    quotes: ["error", "double"],
    "import/no-unresolved": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/jsx-key": [
      "error",
      { checkFragmentShorthand: true, warnOnDuplicates: true },
    ],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".tsx"] },
    ],
    "arrow-body-style": ["error", "always"],
    "react/function-component-definition": [
      2,
      { namedComponents: "arrow-function" },
    ],
    "import/extensions": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": "off",
  },
};
