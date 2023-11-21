import React from "react";
import { Container } from "../../components/UI/container/Container.style";
import { Heading } from "../../components/TypoGraphy/Heading";
import { StyledForgotPassword } from "./ForgotPassword.syle";
import { Input } from "../../components/UI/input/Input";
import { Button } from "../../components/UI/button/Button";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

interface IForgotPasswordForm {
  userphone: string;
}

const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const forgotPasswordSchema = yup.object({
  userphone: yup
    .string()
    .matches(regexUZB, "Введите узбекский номер телефона!")
    .required("Обязательно поле"),
});

export const ForgotPassword = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<IForgotPasswordForm>({
    resolver: yupResolver(forgotPasswordSchema),
    defaultValues: {
      userphone: "",
    }
  })

  const onForgotSubmit: SubmitHandler<IForgotPasswordForm> = (data) => {
    console.log("Data ", data);
  };

  return (
    <Container>
      <StyledForgotPassword>
        <Heading headingText="Забыли пароль?" />
        <div className="messageForUser">Укажите свой номер телефона, чтобы получить код для сброса пароля.</div>
        <form onSubmit={handleSubmit(onForgotSubmit)}>
          <Controller 
            name="userphone"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="Номер телефона"
                type="tel" 
                errorMessage={errors.userphone?.message}
                isError={errors.userphone ? true : false}
                {...field}
              />
            )}
          />
          <Button
            buttonText="Отправить"
            isPrimary 
            type="submit"
            disabled={!!Object.keys(errors).length}
          />
        </form>
      </StyledForgotPassword>
    </Container>
  )
}