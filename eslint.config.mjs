import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [...compat.extends(
  "eslint:recommended",
  "plugin:react/recommended",
  "plugin:react-native/all",
), {
  plugins: {
    react,
    "react-native": reactNative,
  },

  languageOptions: {
    globals: {
      ...reactNative.environments["react-native"]["react-native"],
      fetch: "readonly",
      console: "readonly",
    },

    ecmaVersion: "latest",
    sourceType: "module",

    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
  },

  settings: {
    react: {
      version: "detect",
    },
  },

  rules: {
    "react-native/no-unused-styles": 2,
    "react-native/split-platform-components": 2,
    "react-native/no-inline-styles": 2,
    "react-native/no-color-literals": 0,
    "react-native/no-raw-text": 2,
    "react-native/no-single-element-style-arrays": 2,
    "react-native/sort-styles": 0,
    "react/react-in-jsx-scope": 0,
    "react/prop-types": 0,
    // "react/react-in-jsx-scope": "off",
  },

}];