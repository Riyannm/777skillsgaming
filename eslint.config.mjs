import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    rules: {
      // Cosmetic only — apostrophes/quotes render correctly in JSX text.
      "react/no-unescaped-entities": "off",
      // Resetting state on route change (e.g. closing the mobile menu) is a
      // valid, intentional effect here.
      "react-hooks/set-state-in-effect": "warn",
    },
  },
  {
    // Vendored third-party animation components (reactbits/three.js). Kept
    // as-is; their upstream code uses `any` and advanced hook patterns.
    files: [
      "app/components/backgrounds/**",
      "app/components/ui/ElectricBorder.tsx",
      "app/components/ui/ClickSpark.tsx",
    ],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "react-hooks/unsupported-syntax": "off",
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
