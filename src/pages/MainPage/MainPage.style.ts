import styled from "styled-components";

export const StyledMainPage = styled.div`
  display: grid;
  grid-template-areas: "L M R";
  grid-template-columns: minmax(300px, 360px) auto minmax(300px, 360px);
  gap: 30px;

  .LeftSide {
    grid-area: L;
  }

  .Main {
    grid-area: M;
  }

  .RightSide {
    grid-area: R;

    .List {
      margin-bottom: 20px;
    }
  }
}

@media (max-width: 1440px) {
  .MainPage {
    grid-template-areas: "L M";
    grid-template-columns: 290px auto;

    .RightSide {
      display: none;
    }
  }
}

@media (max-width: 730px) {
  .MainPage {
    display: block;

    .LeftSide {
      display: none;
    }
  }
}

@media (max-width: 1100px) {
  .MainPage {
    grid-template-columns: min-content auto;

    .LeftSide {
      .List {
        display: none;
      }
    }
  }

  .Navbar {
    .navbar__item {
      display: inline-block;

      .icon {
        height: 25px;
      }

      .item__name {
        display: none;
      }

      .Badge {
        display: none;
      }
    }
  }
}

.List {
    box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
    background-color: ${(props) => props.theme.colors.elemsBgc};
    border-radius: 20px;
    padding: calc(1vw + 11px);

    &__title {
      margin-bottom: 20px;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }

.UserElem {
  cursor: pointer;
  position: relative;
  list-style: none;

  display: flex;
  align-items: center;
  gap: 15px;

  padding: 15px;
  border-radius: 15px;

  transition: 200ms;

  &:hover {
    background-color:${(props) => props.theme.colors.lightGray};
  }

  &:active {
    transition: 100ms;
    background-color: ${(props) => props.theme.colors.primeColor};
    p {
      color: white;
    }

    .Badge {
      background-color: white;
      color: ${(props) => props.theme.colors.textColor};
    }
  }

  &:not(:last-child) {
    margin-bottom: 15px;

    &::after {
      content: "";
      height: 1px;
      width: 80%;
      background-color: ${(props) => props.theme.colors.lightGray};

      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  img {
    flex: 0 0 60px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  .user__description {
    flex: 1 1 auto;

    .main__text {
      margin-bottom: 5px;
      display: inline-block;
    }
  }

  .secondary__text {
    font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
    font-weight: 300;

    &._online {
      color: ${(props) => props.theme.colors.green};
    }
  }
}

.icon-more {
  cursor: pointer;
  position: absolute;
  top: calc(1vw + 11px);
  right: calc(1vw + 11px);
  width: 25px;
  padding: 15px;
  box-sizing: content-box;
  border-radius: 15px;

  fill: ${(props) => props.theme.colors.darkGray};
  transition: 200ms;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGray};
  }

  &:active {
    transition: 100ms;
    background-color: ${(props) => props.theme.colors.primeColor};
    fill: white;
  }
}

.media-container {
  display: grid;
  gap: 5px;

  grid-template-columns: repeat(auto-fit, minmax(220px, auto));
  grid-template-rows: minmax(300px, 400px);
  grid-auto-rows: minmax(300px, 400px);

  border-radius: 20px;
  margin-bottom: 40px;
  overflow: hidden;

  .media__item {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
}

@media (max-width: 1480px) {
  .media-container {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    grid-template-rows: minmax(100px, 200px);
    grid-auto-rows: minmax(100px, 200px);
  }
}

.Post {
    box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
    padding: calc(1vw + 11px);
    background-color: ${(props) => props.theme.colors.elemsBgc};
    border-radius: 20px;
    margin-bottom: 20px;

    position: relative;

    &._liked {
      .icon-wrapper {
        .icon-like {
          fill: ${(props) => props.theme.colors.red};
          stroke: 0;
          stroke-width: 0;
        }

        .likes-count {
          color: ${(props) => props.theme.colors.red};
        }
      }
    }

    &._marked {
      .icon-wrapper {
        .icon-mark {
          fill: ${(props) => props.theme.colors.primeColor};
          stroke: 0;
          stroke-width: 0;
        }
      }
    }
  }

.Repost__wrapper {
  border-left: 1px solid ${(props) => props.theme.colors.gray};
  padding-left: 30px;
  margin-left: 30px;
}

.PostControls {
  display: grid;
  grid-template-columns: repeat(3, auto) 2fr;

  justify-content: center;
  align-items: center;

  gap: 15px;

  .icon-wrapper {
    cursor: pointer;
    padding: 10px;
    background-color: ${(props) => props.theme.colors.bgc};
    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover {
      background-color: ${(props) => props.theme.colors.lightGray};
    }

    .count {
      color: ${(props) => props.theme.colors.darkGray};
      font-weight: 400;
    }

    .icon {
      height: 25px;
      overflow: visible;
      fill: transparent;
      transition: 200ms;
    }

    .icon-like {
      stroke: ${(props) => props.theme.colors.darkGray};
      stroke-width: 2px;
    }

    .icon-mark {
      stroke: ${(props) => props.theme.colors.darkGray};
      stroke-width: 2px;
    }

    &.mark {
      justify-self: self-end;
    }
  }
}

.MusicBlock {
  box-shadow: 0 0 10px ${(props) => props.theme.colors.lightGray};
  background-color: ${(props) => props.theme.colors.elemsBgc};
  padding: calc(1vw + 11px);
  border-radius: 20px;

  &__title {
    margin-bottom: 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme.colors.primeColor};
      font-weight: 400;
    }
  }

  .MusicElem {
    cursor: pointer;
    position: relative;
    list-style: none;

    display: flex;
    align-items: center;
    gap: 15px;

    padding: 15px;
    border-radius: 15px;

    transition: 200ms;

    &:hover {
      background-color: ${(props) => props.theme.colors.lightGray};
    }

    img {
      flex: 0 0 70px;
      height: 70px;
      width: 70px;
      border-radius: 5px;
      object-fit: cover;
    }

    .music__description {
      flex: 1 1 auto;

      .main__text {
        margin-bottom: 5px;
        display: inline-block;
      }
    }

    .secondary__text {
      font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
      font-weight: 300;
    }

    .plus-button {
      flex: 0 0 24px;
      height: 24px;

      border: 2px solid ${(props) => props.theme.colors.primeColor};
      border-radius: 50%;

      position: relative;

      &::before {
        content: "";
        border-radius: 5px;
        height: 2px;
        width: 70%;
        background-color: ${(props) => props.theme.colors.primeColor};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 200ms;
      }

      &::after {
        content: "";
        border-radius: 5px;
        width: 2px;
        height: 70%;
        background-color: ${(props) => props.theme.colors.primeColor};
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 200ms;
      }

      &._active {
        &::after {
          transform: translate(-50%, -50%) rotate(90deg);
        }
      }
    }
  }
}

.CommentBlock {
  cursor: pointer;
  position: relative;
  list-style: none;

  display: flex;
  gap: 15px;

  margin-top: 20px;
  padding: 15px;
  border-radius: 15px;

  transition: 200ms;

  &:hover {
    background-color: ${(props) => props.theme.colors.lightGray};
  }

  &::before {
    content: "";
    height: 1px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.lightGray};

    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
  }

  img {
    flex: 0 0 60px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    object-fit: cover;
  }

  .comment__description {
    flex: 1 1 auto;

    .comment__owner {
      margin-bottom: 10px;
      display: inline-block;
    }

    .comment__text {
      font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
      font-weight: 300;
      margin-bottom: 10px;
    }

    .reply {
      color: ${(props) => props.theme.colors.primeColor};
      font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
    }
  }

  .date {
    position: absolute;
    top: 15px;
    right: 15px;
    color: ${(props) => props.theme.colors.gray};
    font-size: calc(0.4vw + 8px); //? 14 - 1440 | 16 - 1920
  }

  .icon-like {
    position: absolute;
    bottom: 15px;
    right: 15px;

    overflow: visible;
    width: 22px;

    fill: none;
    stroke: ${(props) => props.theme.colors.darkGray};
    stroke-width: 2px;

    transition: 200ms;

    &._active {
      fill: ${(props) => props.theme.colors.red};
      stroke: none;
    }

    &:hover {
      stroke: none;
      fill: ${(props) => props.theme.colors.primeColor};
    }
  }
`