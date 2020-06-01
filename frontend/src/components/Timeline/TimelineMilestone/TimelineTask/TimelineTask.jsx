import * as S from "./styles"

import ProjectAPI from "components/API/ProjectAPI.js"

import React, { useRef, useState } from "react"

import EmojiButton from '../../EmojiButton/EmojiButton'

const TimelineTask = ({ name, description, deadline, id, updateCallback, complete, activeItem, setActiveItem }) => {

  const ref = useRef()

  // const [collapsed, setCollapsed ] = useState(true)

  async function submit() {
    let props = {
      id
    }
    try {
      await ProjectAPI.markMilestoneComplete(props)
    } 
    catch(e) { }

    updateCallback()
  }

  const handleCompleteClick = e => {
    e.stopPropagation()
  }

  const collapsed = activeItem !== 'task' + id + name

  const handleClick = e => {
    e.stopPropagation()
    collapsed ? setActiveItem('task' + id + name) : setActiveItem(null) 
  }

  return (
    <S.TimelineTask onClick={handleClick} active={collapsed} id={'task' + id + name}>
      <S.Header active={collapsed}>
        <S.Name>{name}</S.Name>
        <S.Complete type='checkbox' onClick={handleCompleteClick} value={complete}/>
        <S.Spacer />
        <S.Deadline>{new Date(deadline).toLocaleDateString("en-US")}</S.Deadline>
        <S.Node active={collapsed} />
      </S.Header>

      <S.Break />

      {
        collapsed ? null : <S.Description>{description}</S.Description>
      }

      <S.Break />

      {
        collapsed ? null :
        <S.EmojiButtons>
          <EmojiButton emoji={'👏'} reactions={4} />
          <EmojiButton emoji={'🎉'} reactions={4} />
          <EmojiButton emoji={'👍'} reactions={4} />
          <EmojiButton emoji={'❤️'} reactions={4} />
          <EmojiButton emoji={'😍'} reactions={4} />
        </S.EmojiButtons>
      }

      

    </S.TimelineTask>
  )
}

export default TimelineTask
