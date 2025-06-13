import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import eslintPluginImport from "eslint-plugin-import";
import react from "eslint-plugin-react";
export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      react: react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      import: eslintPluginImport,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "import/no-unresolved": "warn",
      /* "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ], */
      "no-console": "warn",
      "no-unused-vars": "warn",
      "no-empty": "warn",
      "no-unreachable": "warn",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      // Ignore missing prop-types validation
      "react/prop-types": "off",
    },
  },
];
