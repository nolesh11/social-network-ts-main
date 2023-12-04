import React from "react";
import { Button } from "../UI/button/Button";
import { useTypedSelector } from "../../hooks/useTypedSelector";
// import { useGetsUserQuery, } from "../../store/API/authApi";

export const UserBlock = () => {
  const user = useTypedSelector((state) => state.userSlice.user)

  return (
    <div className="user__block">
      <img src="./img/users/denis-frolov.jpeg" alt="Denis Frolov" />
      <div className="user__description">
        <h1 className="user__name">{user?.useremail}</h1>
        <div className="user__info">
          <div className="parameter">
            <span className="key">Друзья</span>
            <span className="value">130</span>
          </div>
          <div className="parameter">
            <span className="key">Подписчики</span>
            <span className="value">923</span>
          </div>
          <div className="parameter">
            <span className="key">Подписки</span>
            <span className="value">246</span>
          </div>
        </div>
      </div>
      <div className="buttons-wrapper">
        <Button
          isSecondary
          isPrimary={false}
          buttonText="Редактировать профиль"
        />
        <Button isPrimary buttonText="Добавить историю" />
      </div>
    </div>
  );
};
