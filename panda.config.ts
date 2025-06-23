// panda.config.ts
import { defineConfig } from "@pandacss/dev";
import tokens from "./src/token.json";

// Typescript doesn't know your JSON format, so cast it
const { colors, fonts, spacing } = tokens as {
  colors: Record<string, { value: string }>;
  fonts: Record<string, { value: string }>;
  spacing: Record<string, { value: string }>;
};

export default defineConfig({
  preflight: true, // Enable CSS Reset

  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"], // Files to include
  exclude: [], // Files to exclude
  jsxFramework: "react",
  theme: {
    extend: {
      // 👇🏻 Define your tokens here, directly mapping from the tokens.json
      tokens: {
        colors,
        fonts,
        spacing,
      },
    },
  },

  outdir: "styled-system", // Output directory for the generated CSS system
});

// 1. Panda CSS support tokens - which tokens? https://panda-css.com/docs/theming/tokens
// 2. OPtimization of panda commands
// 3. Advantages and disadvantages of panda css and radix UI.
