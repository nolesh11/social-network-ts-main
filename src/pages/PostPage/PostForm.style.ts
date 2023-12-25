import styled from "styled-components";

export const StyledPostFormBox = styled.form`
  display: flex;
  flex-flow: column;
  background: #fefefe;
  padding: 16px;
  border-radius: 8px;
  width: 480px;
`;

export const StyledPostFormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const StyledPostFormContent = styled.div`
  margin-bottom: 32px;
`;

export const StyledPostFormFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  button {
    max-width: 120px;
    &:first-child {
      margin-right: 8px;
    }
  }
`;
