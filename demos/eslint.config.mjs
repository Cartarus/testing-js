import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";

// Import Jest plugin properly
import pluginJest from "eslint-plugin-jest";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" }, rules: { "no-var": "error" } },
  { files: ["**/*.{js,mjs,cjs}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs}"], plugins: { js }, extends: ["js/recommended"] },
  // Jest configuration for test files
  {
    files: ["**/*.test.{js,mjs,cjs}", "**/__tests__/**/*.{js,mjs,cjs}"],
    plugins: { jest: pluginJest },
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
    rules: {
      // Add Jest plugin rules
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/valid-expect": "error",
    },
  },
]);
