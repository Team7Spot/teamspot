import * as S from "./styles"

import React from "react"

const Comment = ({name, comment, date}) => {
  return (
    <S.Comment>
      <S.ProfilePic>{name.charAt(0).toUpperCase()}</S.ProfilePic>
      <S.Name>{name}</S.Name>
      <S.Date>{new Date(date).toLocaleDateString("en-US")}</S.Date>
      <S.Body>{comment}</S.Body>
    </S.Comment>
  )
}

export default Comment
