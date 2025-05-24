// eslint.config.js
import { fileURLToPath } from "url";
import { dirname } from "path";

import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactPlugin from "eslint-plugin-react";
import reactNativePlugin from "eslint-plugin-react-native";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default [
  // Ignorar arquivos e diretórios específicos
  {
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "tailwind.config.js",
      "babel.config.js",
    ],
  },
  // Configurações para arquivos JavaScript
  {
    files: ["**/*.js", "**/*.jsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      react: reactPlugin,
      "react-native": reactNativePlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      // Outras regras específicas para JavaScript
    },
  },
  // Configurações para arquivos TypeScript
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      react: reactPlugin,
      "react-native": reactNativePlugin,
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      // Outras regras específicas para TypeScript
    },
  },
  // Configuração do Prettier para evitar conflitos
  prettierConfig,
];
