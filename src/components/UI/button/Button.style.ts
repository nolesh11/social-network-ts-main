import styled from "styled-components";

type StyledButtonProps = {
  isPrimary?: boolean,
  isSecondary?: boolean
}

export const StyledButton = styled.button<StyledButtonProps>`
  cursor: pointer;
  padding: 12px 15px;
  font-size: inherit;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primeColor};
  color: white;
  transition: 200ms;
  width: 100%;
  margin-bottom: 30px;

  ${(props) => props.isPrimary && `
    background-color: var(--prime-color);
    color: white;
  `}
  ${(props) => props.isSecondary && `
    background-color: var(--light-gray);
    color: var(--placeholder-color);
  `}

  &:disabled {
    background-color: var(--disabled-bgc);
  }

  &:disabled:hover {
    cursor: default;
    opacity: 0.5;
  }

  &:hover {
    translate: 0 -5px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.7);
  }

  &:active {
    transition: 100ms;
    translate: 0 0;
    box-shadow: none;
  }
`