// src/styles/recipes/button.ts
import { cva } from "../../../styled-system/css";

export const button = cva({
  base: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "body",
    borderRadius: "md",
    px: "base",
    py: "base",
    fontWeight: "medium",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  },
  variants: {
    visual: {
      solid: {
        bg: "primary",
        color: "white",
        _hover: {
          bg: "accent",
        },
      },
      secondary: {
        bg: "secondary",
        color: "black",
        border: "1px solid",
        borderColor: "primary", // makes it defined like a ghost variant
        _hover: {
          bg: "accent",
          color: "white",
        },
      },
      outline: {
        borderWidth: "1px",
        borderStyle: "solid",
        borderColor: "primary",
        color: "primary",
        bg: "transparent",
        _hover: {
          bg: "primary",
          color: "white",
        },
        border: "1px solid",
      },
    },
    size: {
      sm: { fontSize: "sm", px: "base", py: "1" },
      md: { fontSize: "md", px: "base", py: "base" },
      lg: { fontSize: "lg", px: "large", py: "base" },
    },
  },
  defaultVariants: {
    visual: "solid",
    size: "md",
  },
});
