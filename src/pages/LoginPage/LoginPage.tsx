import React from "react";
import "./LoginPage.scss";
import { Heading } from "../../components/TypoGraphy/Heading";
import { StyledLink } from "../../components/TypoGraphy/StyledLink";
import { Button } from "../../components/UI/button/Button";
import { Input } from "../../components/UI/input/Input";

export const LoginPage = () => {
  return (
    <div className="container">
      <div className="LoginPage">
        <Heading headingText="Авторизация" />
        <form>
          <Input placeholder="Номер телефона" type="tel" />
          <Input placeholder="Пароль" type="password" />
          <Button buttonText="Войти" />
        </form>
        <StyledLink linkText="Забыли пароль?" />
        <div className="registration">
          <span>
            У вас нет аккаунта? <a href="#">Зарегистрироваться</a>
          </span>
          <p>Войти с помощью</p>
          <div className="icons-wrapper">
            <a className="reg__link google-link" href="#">
              <img src="./img/icons/google.svg" alt="Google" />
            </a>
            <a className="reg__link google-plus-link" href="#">
              <img src="./img/icons/google-plus.svg" alt="Google Plus" />
            </a>
            <a className="reg__link yandex-link" href="#">
              <img src="./img/icons/yandex.svg" alt="Yandex" />
            </a>
            <a className="reg__link mail-ru-link" href="#">
              <img src="./img/icons/mail-ru.svg" alt="Mail.ru" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
