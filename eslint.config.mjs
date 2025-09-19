import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next",
      "next/core-web-vitals",
      "next/typescript",
      "plugin:prettier/recommended",
    ],
    plugins: ["prettier", "jsx-a11y"],
    rules: {
      "prettier/prettier": [
        "off",
        {
          tailwindAttributes: ["className"],
          tailwindFunctions: ["clsx", "tw"],
          trailingComma: "all",
          semi: true,
          tabWidth: 2,
          singleQuote: false,
          jsxSingleQuote: false,
          printWidth: 80,
          endOfLine: "auto",
          arrowParens: "always",
          plugins: ["prettier-plugin-tailwindcss"],
        },
        {
          usePrettierrc: true,
        },
      ],
      "react/react-in-jsx-scope": "off",
      "@typescript-eslint/no-explicit-any": "off",
    },
  }),
];

export default eslintConfig;
