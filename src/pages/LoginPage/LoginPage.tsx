import React from "react";
import { Heading } from "../../components/TypoGraphy/Heading";
import { StyledLink } from "../../components/TypoGraphy/StyledLink";
import { Button } from "../../components/UI/button/Button";
import { Input } from "../../components/UI/input/Input";
import { Container } from "../../components/UI/container/Container.style";
import { RegistrationInfo } from "../../components/registrationInfo/RegistrationInfo";
import { StyledLoginPage } from "./LoginPage.style";

export const LoginPage = () => {
  return (
    <Container>
      <StyledLoginPage>
        <Heading headingText="Авторизация" />
        <form>
          <Input isError={false} errorMessage="Ошибка" placeholder="Номер телефона" type="tel" />
          <Input isError={false} errorMessage="Неверный пароль" placeholder="Пароль" type="password" />
          <Button isPrimary buttonText="Войти" />
        </form>
        <StyledLink to="/" linkText="Забыли пароль?" />
        <RegistrationInfo/>
      </StyledLoginPage>
    </Container>
  );
};
