import * as S from "./styles"

import React, { useEffect, useState, useRef } from "react"
import SkyLight from 'react-skylight'
import ProjectAPI from 'components/API/ProjectAPI.js'
import Button from 'components/Button/Button'

const Sidebar = ({activeComponent, projectComponents, onClickFunction, updateCallback, resetActiveComponent}) => {

  const [name, setName] = useState('')

  const [showDelete, setShowDelete] = useState(false)

  const [componentId, setComponentId] = useState(null)

  async function submit() {
    try {
      await ProjectAPI.createComponent({
        component_name: name,
        project_id: 1
      })
    } 
    catch(e) { }

    updateCallback()
  }

  async function update() {
    try {
      await ProjectAPI.updateComponent({
        component_name: name,
        id: componentId
      })
    } 
    catch(e) { }

    updateCallback()
  }

  async function deleteComponent() {
    try {
      await ProjectAPI.deleteComponent({
        id: componentId
      })
    } 
    catch(e) { }

    updateCallback()
    resetActiveComponent()
  }

  const modalStyles = {
    background: 'var(--LightColor)',
    color: '#ffffff',
    width: '200px',
    left: 'calc(50% + 200px)',
    borderRadius: '8px',
    height: 'auto'
  }

  const simpleDialog = useRef()

  const [action, setAction] = useState('create')

  const openModal = (e, actionType, editId) => {
    e.stopPropagation()

    if (actionType === 'create') {
      setAction('create')
    }
    if (actionType === 'update') {
      setAction('update')
      setComponentId(editId)
    }

    if (simpleDialog.current) {
      simpleDialog.current.show()
    }
  }


  const renderModal = () => {
    return (
      <SkyLight
        hideOnOverlayClicked 
        ref={simpleDialog}
        title={action === 'update' ? 'Rename Component' : 'New Component'} 
        dialogStyles={modalStyles}
      >
        <S.Inputs>
          <S.TextInput 
            type='text' 
            placeholder={action === 'update' ? 'Rename Component' : 'Component Name'} 
            onChange={e => setName(e.target.value)}
          />
          <S.ButtonInput>
            <Button text='Submit' onClickFunction={() => { action === 'update' ? update() : submit() }}/>
          </S.ButtonInput>
          {
            action === 'update' ?
            <S.ButtonInput>
              <Button text='Delete' onClickFunction={() => deleteComponent()}/>
            </S.ButtonInput>
            : null
          }
        </S.Inputs>

      </SkyLight>
    )
  }

  return (
    <S.Sidebar>
      {
        renderModal()
      }
      <S.Header>
        <S.Logo src={require('./teamspot-logo.svg')} />
      </S.Header>
      {
        projectComponents.map(component => 
          <S.Component 
            active={activeComponent === component.component_name} 
            onClick={() => onClickFunction(component.component_name)}
            title={component.component_name}
          >
            {component.component_name.charAt(0).toUpperCase()}
            {
              showDelete ? <S.Delete onClick={e => openModal(e, 'update', component.id)}><S.Edit src={require('./edit.svg')} /></S.Delete> : null
            }
            
          </S.Component>
        )
      }
      <S.Component onClick={e => openModal(e, 'create')}>+</S.Component>

      <S.Spacer />

      <S.Component onClick={() => setShowDelete(!showDelete)}><S.Edit src={require('./edit.svg')} /></S.Component>
    </S.Sidebar>
  )
}

export default Sidebar
