import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Modal from "react-modal";
import { PostItem, useEditPostMutation } from "../../store/API/postApi";
import {
  StyledPostFormBox,
  StyledPostFormContent,
  StyledPostFormFooter,
  StyledPostFormHeader,
} from "./PostForm.style";
import { Heading } from "../../components/TypoGraphy/Heading";
import { Input } from "../../components/UI/input/Input";
import { Button } from "../../components/UI/button/Button";
import { IEditPostPayload } from "../../store/API/postApi";

type EditPostFormProps = {
  isOpen: boolean;
  onClosseModal: () => void;
  post: PostItem;
  onEditPostSuccess: () => void;
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const EditPostSchema = yup.object({
  mainText: yup.string().required("Это обязательное поле"),
});

export const EditPostForm = ({
  isOpen,
  post,
  onClosseModal,
  onEditPostSuccess,
}: EditPostFormProps) => {
  const {
    control, // передается инпут чтобы реакт форма поняла куда прявязатся
    handleSubmit, // сохранение поста
    formState: { errors }, // показать ошибку если нет ничего в инпуте
  } = useForm({
    resolver: yupResolver(EditPostSchema),
    defaultValues: {
      mainText: post.main_text,
    },
  });

  const [editPost, { isLoading, isSuccess }] = useEditPostMutation();

  useEffect(() => {
    if (isSuccess) {
      onEditPostSuccess();
    }
  }, [isSuccess]);

  const handleEditPostFormSubmit: SubmitHandler<{ mainText: string }> = (
    formData
  ) => {
    const payload: IEditPostPayload = {
      post_id: post.id,
      new_text: formData.mainText,
    };

    editPost(payload);
  };

  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <StyledPostFormBox onSubmit={handleSubmit(handleEditPostFormSubmit)}>
        <StyledPostFormHeader>
          <Heading headingText="Изменить пост" headingType="h3" />
        </StyledPostFormHeader>
        <StyledPostFormContent>
          <Controller
            name="mainText"
            control={control}
            render={({ field }) => (
              <Input
                isError={errors.mainText ? true : false}
                errorMessage={errors.mainText?.message}
                placeholder="Текст"
                {...field}
              />
            )}
          />
        </StyledPostFormContent>
        <StyledPostFormFooter>
          <Button
            disabled={isLoading}
            buttonText="Сохранить"
            isPrimary
            type="submit"
          />
          <Button
            disabled={isLoading}
            buttonText="Отменить"
            isPrimary
            onClick={onClosseModal}
          />
        </StyledPostFormFooter>
      </StyledPostFormBox>
    </Modal>
  );
};
