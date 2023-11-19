import React from "react";
import { Container } from "../../components/UI/container/Container.style";
import { StyledLoginPage } from "../LoginPage/LoginPage.style";
import { Heading } from "../../components/TypoGraphy/Heading";
import { Input } from "../../components/UI/input/Input";
import { Button } from "../../components/UI/button/Button";
import { LoginInfo } from "../../components/loginInfo/LoginInfo";

export const ReagistrationPage = () => {
  return (
    <Container>
      <StyledLoginPage>
        <Heading headingText="Регистрация" />
        <form>
          <Input placeholder="Имя и фамилия" type="text" errorMessage="Ошибка" isError={false} />
          <Input placeholder="Номер телефона" type="tel" errorMessage="Ошибка" isError={false} />
          <Input placeholder="Пароль" type="password" errorMessage="Ошибка" isError={false} />
          <Button buttonText="Зарегистрироваться" isPrimary />
        </form>
        <LoginInfo />
      </StyledLoginPage>
    </Container>
  )
}