import React from "react";  
import { StyledInput } from "./Input.style";

interface InputProps {
  placeholder: string
  type: 'tel' | 'password'
}

export const Input = ({placeholder, type}: InputProps) => {
  return(
    <StyledInput placeholder={placeholder} type={type} />
  )
}