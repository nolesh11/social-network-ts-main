import React from "react";  
import { ErrorMessage, InputContainer, StyledInput } from "./Input.style";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  errorMessage?: string
  isError: boolean
}

export const Input = ({placeholder, type, errorMessage, isError}: InputProps) => {
  return(
    <InputContainer>
      <StyledInput placeholder={placeholder} type={type} />
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </InputContainer>
  )
}