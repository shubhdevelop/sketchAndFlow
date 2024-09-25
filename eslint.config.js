/* eslint-disable import/no-extraneous-dependencies */
// import globals from 'globals';
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import path from "path";
import { fileURLToPath } from "url";

// mimic CommonJS variables -- not needed if using CommonJS
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const compat = new FlatCompat({
    baseDirectory: dirname,
    resolvePluginsRelativeTo: dirname, // optional
    recommendedConfig: js.configs.recommended, // optional unless you're using "eslint:recommended"
    allConfig: js.configs.all,
});

export default [
    {
        files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
        ignores: ["./eslint.config.js"],
    },
    // { languageOptions: { globals: globals.browser } },
    ...compat.config({
        env: {
            browser: true,
            es2021: true,
        },
        extends: [
            "airbnb",
            "airbnb-typescript",
            "airbnb/hooks",
            "plugin:react/recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:prettier/recommended",
        ],
        overrides: [],
        parser: "@typescript-eslint/parser",
        parserOptions: {
            ecmaFeatures: {
                jsx: true,
                tsx: true,
            },
            ecmaVersion: "latest",
            sourceType: "module",
            project: "tsconfig.app.json",
        },
        plugins: ["react", "@typescript-eslint", "prettier"],
        rules: {
            "react/react-in-jsx-scope": 0,
        },
    }),
];
