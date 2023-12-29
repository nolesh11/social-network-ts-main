import React from "react";
import { StyledTextarea } from "./Post.style";

interface PostCommentsEditorProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const PostCommentsEditor = ({
  value,
  onChange,
  onKeyDown,
}: PostCommentsEditorProps) => {
  return (
    <StyledTextarea
      value={value}
      rows={3}
      placeholder="Добавить коментарий"
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};
