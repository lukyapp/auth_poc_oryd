import { builtinModules } from "module";
import { dirname } from "path";
import { fileURLToPath } from "url";

import { FlatCompat } from "@eslint/eslintrc";
import simpleImportSort from "eslint-plugin-simple-import-sort";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

    {
        plugins: {
            "simple-import-sort": simpleImportSort,
        },
        rules: {
            "simple-import-sort/imports": [
                "error",
                {
                    groups: [
                        ["^node:", `^(${builtinModules.join("|")})(/|$)`],

                        // React and external packages
                        ["^react", "^next", "^@?\\w"],

                        // Internal project modules (adjust aliases as needed)
                        ["^(@app|@src|@components|@lib|@utils|@hooks|@config|@types)(/.*|$)"],

                        // Side effect imports (e.g. CSS, polyfills)
                        ["^\\u0000"],

                        // Parent imports
                        ["^\\.\\.(?!/?$)", "^\\.\\./?$"],

                        // Relative imports
                        ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],

                        // Style imports
                        ["^.+\\.?(css|scss|sass|less)$"],
                    ],
                },
            ],
            "simple-import-sort/exports": "error",
        },
    },

  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
