import React from "react";
import { StyledButton } from "./Button.style";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonText: string;
  isPrimary: boolean;
  isSecondary?: boolean;
}

export const Button = ({
  buttonText,
  isPrimary,
  isSecondary,
  type,
  disabled
}: ButtonProps) => {
  return (
    <StyledButton disabled={disabled} type={type} $isPrimary={isPrimary} isSecondary={isSecondary}>
      {buttonText}
    </StyledButton>
  )
}