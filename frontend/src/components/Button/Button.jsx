import * as S from "./styles";

import React from "react";

const Button = ({ icon, onClickFunction, emphasize, text, title, outline }) => {
  const handleClick = e => {
    e.preventDefault();
    onClickFunction();
  };

  return (
    <S.Button
      onClick={e => handleClick(e)}
      emphasize={emphasize}
      square={!text}
      outline={outline}
      title={title ? title : ""}
    >
      {/* {
        icon ? <S.Icon icon={icon} /> : null
      } */}

      {text ? <S.Text icon={icon}>{text}</S.Text> : null}
    </S.Button>
  );
};

export default Button;
