import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable specific TypeScript-related rules
      "@typescript-eslint/no-explicit-any": "off", // Disable `any` type restriction
      "@typescript-eslint/no-unused-vars": "warn", // Show warnings for unused vars instead of errors
      "no-unused-vars": "off", // You can also disable the base JavaScript unused-vars rule
      "react/no-unused-prop-types": "off", // Disable unused prop types in React (if you use them)
    },
  },
];

export default eslintConfig;
