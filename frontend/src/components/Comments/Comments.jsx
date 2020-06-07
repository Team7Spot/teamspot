import * as S from "./styles"

import React from "react"

import Comment from './Comment/Comment'

const Comments = () => {

  const comments = [
    {
      name: 'Tom Leamon',
      comment: 'We should meet on Wednesday to talk about this more. I think this would be an awesome feature!',
      date: '2020-05-27T00:00:00.000Z'
    },
    {
      name: 'Tom Leamon',
      comment: 'We should meet on Wednesday to talk about this more. I think this would be an awesome feature!',
      date: '2020-05-27T00:00:00.000Z'
    },
    {
      name: 'Tom Leamon',
      comment: 'We should meet on Wednesday to talk about this more. I think this would be an awesome feature!',
      date: '2020-05-27T00:00:00.000Z'
    }
  ]

  return (
    <S.Comments>
      <S.Header>
        <S.HeaderText>Comments</S.HeaderText>
      </S.Header>

      <S.Content>
        {
          comments.map(comment => <Comment name={comment.name} comment={comment.comment} date={comment.date} />)
        }
        
      </S.Content>

      <S.CommentInput type='text' placeholder='Write your comment' />
      <S.SubmitComment>➤</S.SubmitComment>
    </S.Comments>
  )
}

export default Comments
