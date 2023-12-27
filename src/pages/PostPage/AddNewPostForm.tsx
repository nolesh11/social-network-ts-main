import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Modal from "react-modal";
import * as yup from "yup";
import {
  StyledPostFormBox,
  StyledPostFormFooter,
  StyledPostFormContent,
  StyledPostFormHeader,
} from "./PostForm.style";
import { Heading } from "../../components/TypoGraphy/Heading";
import { Button } from "../../components/UI/button/Button";
import { Input } from "../../components/UI/input/Input";
import { useAddNewPostMutation } from "../../store/API/postApi";
import { useUserId } from "../../hooks/useUserId";

type AddNewPostFormProps = {
  isOpen: boolean;
  onClosseModal: () => void;
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

const AddNewPostSchema = yup.object({
  mainText: yup.string().required("Это обязательное поле"),
});

export const AddNewPostForm = ({
  isOpen,
  onClosseModal,
}: AddNewPostFormProps) => {
  const {
    control, // передается инпут чтобы реакт форма поняла куда прявязатся
    handleSubmit, // сохранение поста
    formState: { errors }, // показать ошибку если нет ничего в инпуте
  } = useForm({
    resolver: yupResolver(AddNewPostSchema),
    defaultValues: {
      mainText: "",
    },
  });

  const userId = useUserId();

  const [addNewPost, { data: postData, isLoading, isSuccess }] =
    useAddNewPostMutation();

  const handleAddNewPostSubmit: SubmitHandler<{ mainText: string }> = (
    formData
  ) => {
    if (formData) {
      const payload = {
        user_id: Number(userId),
        main_text: formData.mainText,
      };
      addNewPost(payload);
      onClosseModal();
    }
    if (isSuccess) {
      onClosseModal();
    }
  };
  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <StyledPostFormBox onSubmit={handleSubmit(handleAddNewPostSubmit)}>
        <StyledPostFormHeader>
          <Heading headingText="Давить новый пост" headingType="h3" />
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
          <Button disabled={isLoading} buttonText="Отменить" isPrimary />
        </StyledPostFormFooter>
      </StyledPostFormBox>
    </Modal>
  );
};
