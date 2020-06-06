import * as S from "./styles"

import ProjectAPI from "components/API/ProjectAPI.js"

import React, { useRef, useState, useEffect } from "react"

import TimelineTask from './TimelineTask/TimelineTask'
import EmojiButton from '../EmojiButton/EmojiButton'

const TimelineMilestone = ({ 
  name, 
  description, 
  deadline,
  priority, 
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

  const [editing, setEditing] = useState(false)

  const handleCompleteClick = e => {
    e.stopPropagation()
    submit()
  }

  const handleDeleteClick = e => {
    e.stopPropagation()
    async function deleteMilestone() {
      let props = {
        id 
      }
      console.log(id)
      try {
        await ProjectAPI.deleteMilestone(props)
      } 
      catch(e) { }
  
      updateCallback()
    }
    deleteMilestone()
  }

  const collapsed = activeItem !== 'milestone' + id + name && !(tasks.filter(task => activeItem === `task${task.id}${task.task_name}`).length > 0)

  const handleClick = e => {
    e.stopPropagation()
    collapsed ? setActiveItem('milestone' + id + name) : setActiveItem(null)
  }

  const edit = e => {
    if (!collapsed) e.stopPropagation()
    setEditing(!editing)
  }

  const [editName, setEditName] = useState('')
  const [editDescription, setEditDescription] = useState('')
  const [editDate, setEditDate] = useState('')

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (editName !== '') {
        async function submitEditName() {
          try {
            await ProjectAPI.editMilestone({
              id, 
              milestone_name: editName, 
              priority, 
              description, 
              deadline: new Date(deadline).toISOString().split('T')[0]
            })
          } 
          catch(e) { }
      
          updateCallback()
        }
        submitEditName()
      }
    }, 2000)

    return () => clearTimeout(delayDebounceFn)
  }, [editName])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (editDescription !== '') {
        async function submitEditDescription() {
          try {
            await ProjectAPI.editMilestone({
              id, 
              milestone_name: name, 
              priority, 
              description: editDescription, 
              deadline: new Date(deadline).toISOString().split('T')[0]
            })
          } 
          catch(e) { }
      
          updateCallback()
        }
        submitEditDescription()
      }
    }, 2000)

    return () => clearTimeout(delayDebounceFn)
  }, [editDescription])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (editDate !== '') {
        async function submitEditDate() {
          try {
            await ProjectAPI.editMilestone({
              id, 
              milestone_name: name, 
              priority, 
              description, 
              deadline: editDate
            })
          } catch(e) { }
          updateCallback()
        }
        submitEditDate()
      }
    }, 2000)

    return () => clearTimeout(delayDebounceFn)
  }, [editDate])

  return (
    <S.TimelineMilestone onClick={(e) => handleClick(e)} >
      <S.MilestoneBackground>
        <S.Header active={collapsed}>
          {
            editing ? 
            <S.EditName
              type='text'
              onClick={e => e.stopPropagation()}
              onChange={e => setEditName(e.target.value)}
              value={editName || name}
            /> 
            : <S.Name>{name}&nbsp;</S.Name>
          }
          {
            editing 
            ? <S.Delete title='DELETE' onClick={e => handleDeleteClick(e)}>❌</S.Delete> 
            : <S.Complete type='checkbox' onClick={handleCompleteClick} checked={complete === 1 ? true : false} />
          }
          
          <S.Spacer />
          
          {
            editing ? 
            <S.EditDate
              type='date'
              onClick={e => e.stopPropagation()}
              onChange={e => setEditDate(e.target.value)}
              value={editDate || new Date(deadline).toISOString().split('T')[0]}
            /> 
            : <S.Deadline>{new Date(deadline).toLocaleDateString("en-US")}</S.Deadline>
          }

          <S.Edit src={require('../edit.svg')} onClick={(e) => edit(e)}/>

          <S.Node active={collapsed} />
        </S.Header>

        <S.Content active={collapsed}>
          {
            collapsed ? null : 
              editing ?
              <S.EditDescription 
                type='textarea'
                onClick={e => e.stopPropagation()}
                onChange={e => setEditDescription(e.target.value)}
                value={editDescription || description}
              />
              : 
            <S.TimelineDescription>{description}</S.TimelineDescription>
          }
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
              complete={task.completed}
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
