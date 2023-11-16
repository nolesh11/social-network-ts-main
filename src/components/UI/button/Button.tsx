import React from "react";
import { StyledButton } from "./Button.style";

interface ButtonProps  {
  buttonText: string
}

export const Button = ({buttonText}: ButtonProps) => {
  return (
    <StyledButton>
      {buttonText}
    </StyledButton>
  )
}