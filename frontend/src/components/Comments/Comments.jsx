import * as S from "./styles"

import React, { useState, useEffect } from "react"

import ProjectAPI from "components/API/ProjectAPI.js"

import Comment from './Comment/Comment'

const Comments = ({activeItem, UID, projectComponents, activeComponentId, updateCallback, activeMilestoneId }) => {

  const type = activeItem ? activeItem.substring(0,4) === 'task' ? 'task' : 'milestone' : ''

  const id = activeItem ? activeItem.match(/\d+/g) : -1

  const [comments, setComments] = useState([])

  const [content, setContent] = useState('')

  useEffect(() => {
    setComments([])
    if (activeComponentId && activeComponentId !== -1 && projectComponents && activeMilestoneId !== -1 && activeMilestoneId) {
      if (type === 'milestone') {
        let commentsDisplay
        type === 'milestone' 
          ? commentsDisplay = projectComponents.find(component => component.id === activeComponentId).milestones.find(milestone => milestone.id === activeMilestoneId).comments
          : commentsDisplay = projectComponents.find(component => 
            component.id === activeComponentId).milestones.find(milestone => 
              milestone.id === activeMilestoneId).tasks.find(task => task.id === id).comment

        if (commentsDisplay) { setComments(commentsDisplay) }
      }
    }
  }, [activeItem, projectComponents])


  async function sendMilestoneComment() {
    let props = {
      milestone_id: id,
      user_id: null,
      user_email: UID,
      time_stamp: new Date().toISOString().split('T')[0],
      content
    }
    try { 
      await ProjectAPI.sendMilestoneComment(props) 
    }
    catch(e) { }
    updateCallback()
  }

  async function sendTaskComment() {
    let props = {
      task_id: id,
      user_id: null,
      user_email: UID,
      time_stamp: new Date().toISOString().split('T')[0],
      content
    }
    try { 
      await ProjectAPI.sendTaskComment(props) 
    }
    catch(e) { }
    updateCallback()
  }

  const sendComment = () => {
    type === 'task' ? sendTaskComment() : sendMilestoneComment()
  }

  return (
    <S.Comments>
      <S.Header>
        <S.HeaderText>Comments</S.HeaderText>
      </S.Header>

      <S.Content>
        {
          comments.map((comment, index) => <Comment key={comment.user_email + index} name={comment.user_email} comment={comment.content} date={comment.time_stamp} />)
        }
        
      </S.Content>

      <S.CommentInput type='text' placeholder='Write your comment' onChange={e => setContent(e.target.value)} />
      <S.SubmitComment onClick={() => sendComment() }>➤</S.SubmitComment>
    </S.Comments>
  )
}

export default Comments
