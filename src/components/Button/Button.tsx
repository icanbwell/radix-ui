// src/components/ui/Button.tsx
import { button } from "./buttonStyles";
import React from "react";
import { Slot } from "@radix-ui/react-slot";
import type { RecipeVariantProps } from "../../../styled-system/types/recipe";
import { cx } from "../../../styled-system/css";

// 1. Extract Panda button variant types
type ButtonVariants = RecipeVariantProps<typeof button>;

// 2. Combine with native button props
type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonVariants & {
    asChild?: boolean;
    className?: string;
  };

// 3. Define the component
export const Button = ({ children, className, ...props }: ButtonProps) => {
  const { asChild, ...rest } = props;

  const Component = asChild ? Slot : "button";

  return (
    <Component className={cx(button(rest), className)} {...rest}>
      {children}
    </Component>
  );
};
