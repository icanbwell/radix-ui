// components/ui/Select.tsx
import * as React from "react";
import * as RadixSelect from "@radix-ui/react-select";

import {
  selectTrigger,
  selectContent,
  selectItem,
  selectLabel,
} from "./selectStyles";

export type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
};

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select...",
  label,
}) => {
  return (
    <RadixSelect.Root value={value} onValueChange={onChange}>
      {label && (
        <RadixSelect.Group>
          <RadixSelect.Label className={selectLabel()}>
            {label}
          </RadixSelect.Label>
        </RadixSelect.Group>
      )}
      <RadixSelect.Trigger
        className={selectTrigger()}
        aria-label={label || "Select"}
      >
        <RadixSelect.Value placeholder={placeholder} />
        <RadixSelect.Icon>
          {/* Simple down arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content className={selectContent()} position="popper">
          <RadixSelect.Viewport>
            {options.map(({ value, label }) => (
              <RadixSelect.Item
                key={value}
                value={value}
                className={selectItem()}
              >
                <RadixSelect.ItemText>{label}</RadixSelect.ItemText>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};
