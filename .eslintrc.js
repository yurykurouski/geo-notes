module.exports = {
  root: true,
  extends: ["universe/native"],
  plugins: ["eslint-plugin-simple-import-sort", "unused-imports"],
  rules: {
    "simple-import-sort/exports": "error",
    "simple-import-sort/imports": "error",
    "react/display-name": "off",
    "no-console": "warn",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
  },
};
