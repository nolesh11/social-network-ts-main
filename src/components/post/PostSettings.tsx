import React from "react";
import { StyledPostSettings } from "./Post.style";

type PostSettingsProps = {
  onEdditClick?: () => void
  onDeleteClick: () => void
}

export const PostSettings = ({ onEdditClick, onDeleteClick }: PostSettingsProps) => {
  return (
    <StyledPostSettings>
      <span onClick={onEdditClick}>Изменить</span>
      <span onClick={onDeleteClick}>Удалить</span>
    </StyledPostSettings>
  )
}