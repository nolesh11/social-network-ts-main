import React, { useEffect } from "react";
import { Heading } from "../../components/TypoGraphy/Heading";
import { StyledLink } from "../../components/TypoGraphy/StyledLink";
import { Button } from "../../components/UI/button/Button";
import { Input } from "../../components/UI/input/Input";
import { Container } from "../../components/UI/container/Container.style";
import { RegistrationInfo } from "../../components/registrationInfo/RegistrationInfo";
import { StyledLoginPage } from "./LoginPage.style";
import { RootState } from "../../store/store";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { changeUser } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";


interface ILoginForm {
  username: string,
  userpassword: string
}

const loginFormSchema = yup.object({
  username: yup.string().required("Обязательно поле"),
  userpassword: yup
    .string()
    .min(4, "Параль должен содержать минимум 4 символа")
    .required("Обязательно поле"),
});

const mockuser = {
  mail: "example@mail.com",
  phone_number: "1243546",
  user_id: 1,
  name: "Alex",
  reg_date: new Date().toISOString,
  city: "Tashkent",
}

export const LoginPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<ILoginForm>({
    resolver: yupResolver(loginFormSchema),
    defaultValues: {
      username: "",
      userpassword: ""
    },
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state: RootState) => state.userSlice.user)

  const onLoginSubmit: SubmitHandler<ILoginForm> = (data) => {
    dispatch(changeUser(mockuser))
  }

  useEffect(() => {
    console.log(user);
    if (user?.user_id) {
      navigate("/profile")
    }
  }, [user])

  return (
    <Container>
      <StyledLoginPage>
        <Heading headingText="Авторизация" />
        <form onSubmit={handleSubmit(onLoginSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                isError={false}
                errorMessage={errors.username?.message}
                placeholder="Номер телефона"
                type="tel"
                {...field}
              />
            )}
          />
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <Input
                isError={false}
                errorMessage={errors.username?.message}
                placeholder="Пароль"
                type="password"
                {...field}
              />
            )}
          />
          <Button 
            type="submit"
            isPrimary 
            buttonText="Войти"
            disabled={!!Object.keys(errors).length}
          />
        </form>
        <StyledLink to="/forgotpassword" linkText="Забыли пароль?" />
        <RegistrationInfo />
      </StyledLoginPage>
    </Container>
  );
};
