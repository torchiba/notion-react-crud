// src/components/atoms/TextInput.tsx
import type { ChangeEvent } from "react";

type TextInputProps = {
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

const TextInput = ({ value, onChange }: TextInputProps) => {
  return <input type="text" value={value} onChange={onChange} />;
};

export default TextInput;