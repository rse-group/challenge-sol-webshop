import globals from "globals";
import pluginReact from "eslint-plugin-react";
import tseslint from "typescript-eslint";

export default [
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: { ...globals.browser },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      // TODO: Remove these gradually as you fix the issues
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "warn",
      "react/prop-types": "off",
      "react/jsx-key": "warn",
    },
  },
];
