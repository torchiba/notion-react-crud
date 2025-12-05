// src/components/atoms/Button.tsx
import type { ReactNode, MouseEventHandler } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
};

const Button = ({ children, onClick, type = "button" }: ButtonProps) => {
  return (
    <button className="btn" type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;