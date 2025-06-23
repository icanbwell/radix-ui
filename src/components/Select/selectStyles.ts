import { cva } from "../../../styled-system/css";

export const selectTrigger = cva({
  base: {
    all: "unset",
    boxSizing: "border-box",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: "md", // token key
    padding: "base", // token key for spacing
    fontFamily: "body", // token key for font
    fontSize: "md", // token key if defined, or fallback
    lineHeight: "1",
    gap: "0.5rem",
    backgroundColor: "secondary", // token key for color
    border: "1px solid", // you might need to do this differently
    borderColor: "primary", // token key for border color
    color: "primary", // token key for text color
    cursor: "pointer",
    userSelect: "none",
    transition: "all 0.2s ease",
    _hover: {
      borderColor: "accent",
      color: "accent",
    },
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "accent",
      outlineOffset: "2px",
    },
  },
});

export const selectContent = cva({
  base: {
    overflow: "hidden",
    backgroundColor: "white",
    borderRadius: "md",
    borderWidth: "1px",
    borderStyle: "solid",
    borderColor: "primary",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    zIndex: 1000,
  },
});

export const selectItem = cva({
  base: {
    fontFamily: "body",
    fontSize: "md",
    lineHeight: "1",
    color: "primary",
    padding: "base",
    userSelect: "none",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "secondary",
      outlineOffset: "-2px",
      backgroundColor: "accent",
    },
    _highlighted: {
      backgroundColor: "primary",
      color: "white",
    },
  },
});

export const selectLabel = cva({
  base: {
    padding: "base",
    fontSize: "sm",
    color: "primary",
    fontWeight: "bold",
  },
});
