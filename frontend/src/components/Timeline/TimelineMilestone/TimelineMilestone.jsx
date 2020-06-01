import * as S from "./styles"

import ProjectAPI from "components/API/ProjectAPI.js"

import React, { useRef, useState } from "react"

import TimelineTask from './TimelineTask/TimelineTask'
import EmojiButton from '../EmojiButton/EmojiButton'

const TimelineMilestone = ({ 
  name, 
  description, 
  deadline, 
  id, 
  updateCallback, 
  tasks,
  complete,
  activeItem,
  setActiveItem
}) => {
  // const [collapsed, setCollapsed ] = useState(true)

  async function submit() {
    let props = {
      id 
    }
    console.log(id)
    try {
      await ProjectAPI.markMilestoneComplete(props)
    } 
    catch(e) { }

    updateCallback()
  }

  const handleCompleteClick = e => {
    e.stopPropagation()
    submit()
  }

  const collapsed = activeItem !== 'milestone' + id + name && !(tasks.filter(task => activeItem === `task${task.id}${task.task_name}`).length > 0)

  const handleClick = e => {
    e.stopPropagation()
    collapsed ? setActiveItem('milestone' + id + name) : setActiveItem(null)
  }

  

  return (
    <S.TimelineMilestone onClick={(e) => handleClick(e)} >
      <S.MilestoneBackground>
        <S.Header active={collapsed}>
          <S.Name>{name}</S.Name>
          <S.Complete type='checkbox' onClick={handleCompleteClick} checked={complete === 1 ? true : false} />
          <S.Spacer />
          <S.Deadline>{new Date(deadline).toLocaleDateString("en-US")}</S.Deadline>
          <S.Node active={collapsed} />
        </S.Header>

        <S.Content>
          <S.Break />

          {
            collapsed ? null : <S.TimelineDescription>{description}</S.TimelineDescription>
          }

          <S.Break />

          <S.EmojiButtons>
            <EmojiButton emoji={'👏'} reactions={4} />
            <EmojiButton emoji={'🎉'} reactions={4} />
            <EmojiButton emoji={'🔥'} reactions={4} />
            <EmojiButton emoji={'🤟'} reactions={4} />
            <EmojiButton emoji={'❤️'} reactions={4} />
            <EmojiButton emoji={'😍'} reactions={4} />
            <EmojiButton emoji={'👀'} reactions={4} />
            <EmojiButton emoji={'💵'} reactions={4} />
          </S.EmojiButtons>
        </S.Content>
      </S.MilestoneBackground>
      <S.Tasks>
        {
          tasks && !collapsed ? tasks.sort((a, b) => new Date(a.deadline) - new Date(b.deadline)).map(task => 
            <TimelineTask
              name={task.task_name}
              deadline={task.deadline}
              description={task.description}
              id={task.id}
              updateCallback={updateCallback}
              complete={task.complete}
              setActiveItem={setActiveItem}
              activeItem={activeItem}
            /> 
          ) : null
        }
      </S.Tasks>
    </S.TimelineMilestone>
  )
}

export default TimelineMilestone
