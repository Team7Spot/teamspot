import * as S from "./styles"

import ProjectAPI from "components/API/ProjectAPI.js"

import React, { useRef, useState, useEffect } from "react"

import EmojiButton from '../../EmojiButton/EmojiButton'

const TimelineTask = ({ name, description, deadline, id, updateCallback, complete, activeItem, setActiveItem, priority }) => {

  const [editing, setEditing] = useState(false)

  // const [collapsed, setCollapsed ] = useState(true)

  async function submit() {
    let props = {
      id
    }
    try {
      await ProjectAPI.markTaskComplete(props)
    } 
    catch(e) { }

    updateCallback()
  }

  const handleCompleteClick = e => {
    e.stopPropagation()
    submit()
  }

  const collapsed = activeItem !== 'task' + id + name

  const handleClick = e => {
    e.stopPropagation()
    collapsed ? setActiveItem('task' + id + name) : setActiveItem(null) 
  }

  const handleDeleteClick = e => {
    e.stopPropagation()
    async function deleteTask() {
      let props = {
        id 
      }
      console.log(id)
      try {
        await ProjectAPI.deleteTask(props)
      } 
      catch(e) { }
  
      updateCallback()
    }
    deleteTask()
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
            await ProjectAPI.editTask({
              id, 
              task_name: editName, 
              priority, 
              description, 
              deadline: new Date(deadline).toISOString().split('T')[0]
            })
          } 
          catch(e) { }
      
          updateCallback()
        }
        submitEditName()
        setActiveItem('task' + id + editName)
        const activeItemElement = document.getElementById('task' + id + editName)
        if (activeItemElement) { activeItemElement.scrollIntoViewIfNeeded()}
      }
    }, 2000)

    return () => clearTimeout(delayDebounceFn)
  }, [editName])

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (editDescription !== '') {
        async function submitEditDescription() {
          try {
            await ProjectAPI.editTask({
              id, 
              task_name: name, 
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
            await ProjectAPI.editTask({
              id, 
              task_name: name, 
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

  const [emojis, setEmojis] = useState([
    {
      emoji: '👏',
      count: 0
    },
    {
      emoji: '🎉',
      count: 0
    },
    {
      emoji: '🔥',
      count: 0
    },
    {
      emoji: '👀',
      count: 0
    },
    {
      emoji: '❤️',
      count: 0
    },
    {
      emoji: '😍',
      count: 0
    },
    {
      emoji: '💵',
      count: 0
    }
  ])

  const incrementEmoji = emojiChar => {
    setEmojis(emojis.map(emoji => emoji.emoji === emojiChar ? { count: emoji.count++, ...emoji } : emoji))
  }

  return (
    <S.TimelineTask onClick={handleClick} active={collapsed} id={'task' + id + name}>
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

        <S.Edit src={require('../../edit.svg')} onClick={(e) => edit(e)}/>
        
        <S.Node active={collapsed} />
      </S.Header>

      <S.Break />
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
          <S.Description>{description}</S.Description>
        }

      <S.Break />

      {
        collapsed ? null :
        <S.EmojiButtons onClick={e => e.stopPropagation()}>
          {
            emojis.map(emoji => 
              <EmojiButton 
                emoji={emoji.emoji} 
                reactions={emoji.count} 
                onClickFunction={() => incrementEmoji(emoji.emoji)}
                count={emoji.count} 
                complete={complete === 1 ? true : false}
              />
            )
          }
        </S.EmojiButtons>
      }

    </S.TimelineTask>
  )
}

export default TimelineTask
