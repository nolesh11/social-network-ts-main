import React, { useEffect } from "react";
import { Container } from "../../components/UI/container/Container.style";
import { StyledLoginPage } from "../LoginPage/LoginPage.style";
import { Heading } from "../../components/TypoGraphy/Heading";
import { Input } from "../../components/UI/input/Input";
import { Button } from "../../components/UI/button/Button";
import { LoginInfo } from "../../components/loginInfo/LoginInfo";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
// import { useTypedSelector } from "../../hooks/useTypedSelector";
import { changeUser } from "../../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { useRegisterUserMutation } from "../../store/API/authApi";
// import { useRegisterUserMutation } from "../../store/API/authApi";

interface IRegistrationForm {
  username: string;
  useremail: string;
  userphone: string;
  userpassword: string;
  usercity: string;
}

const regexUZB = /^(?:\+998)?(?:\d{2})?(?:\d{7})$/;

const registrationFormSchema = yup.object({
  username: yup.string().required("Обязательно поле"),
  useremail: yup.string().email().required("Обязательно поле"),
  userphone: yup
    .string()
    .matches(regexUZB, "Введите узбекский номер телефона!")
    .required("Обязательно поле"),
  userpassword: yup
    .string()
    .min(4, "Параль должен содержать минимум 4 символа")
    .required("Обязательно поле"),
  usercity: yup.string().required("Обязательно поле"),
});

// const mockuser = {
//   name: "Mick",
//   phone_number: "1234567",
//   email: "test@mail.com",
//   password: "1235f",
//   user_city: "Tashkent"
// }

export const ReagistrationPage = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegistrationForm>({
    resolver: yupResolver(registrationFormSchema),
    defaultValues: {
      username: "",
      userphone: "",
      userpassword: "",
      usercity: "",
      useremail: "",
    },
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useTypedSelector((state) => state.userSlice.user);

  // const [userRegist, ] = useRegisterUserMutation()

  // console.warn("Errors: ", errors);

  const [registUser, { data: userData }] = useRegisterUserMutation();

  const onRegistarionSubmit: SubmitHandler<IRegistrationForm> = (data) => {
    // console.log("Data ", data);
    registUser({
      email: data.useremail,
      name: data.username,
      password: data.userpassword,
      phone_number: data.userphone,
      user_city: data.usercity,
    });
    dispatch(changeUser(data));
  };

  useEffect(() => {
    console.log(userData);
    if (userData?.user_id) {
      navigate("/");
    }
  }, [navigate, userData]);

  return (
    <Container>
      <StyledLoginPage>
        <Heading headingText="Регистрация" />
        <form onSubmit={handleSubmit(onRegistarionSubmit)}>
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="Имя и фамилия"
                type="text"
                errorMessage={errors.username?.message}
                isError={errors.username ? true : false}
                {...field}
              />
            )}
          />
          <Controller
            name="useremail"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="Почта"
                type="email"
                errorMessage={errors.useremail?.message}
                isError={errors.useremail ? true : false}
                {...field}
              />
            )}
          />
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
          <Controller
            name="userpassword"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="Пароль"
                type="password"
                errorMessage={errors.userpassword?.message}
                isError={errors.userpassword ? true : false}
                {...field}
              />
            )}
          />
          <Controller
            name="usercity"
            control={control}
            render={({ field }) => (
              <Input
                placeholder="Ваш город проживания"
                type="text"
                errorMessage={errors.usercity?.message}
                isError={errors.usercity ? true : false}
                {...field}
              />
            )}
          />

          <Button
            isPrimary
            disabled={!!Object.keys(errors).length}
            buttonText="Зарегистрироваться"
            type="submit"
          />
        </form>
        <LoginInfo />
      </StyledLoginPage>
    </Container>
  );
};
