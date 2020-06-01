import * as S from "./styles"

import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

// APIs
import Authentication from "components/API/Authentication.js"
import ProjectAPI from "components/API/ProjectAPI.js"

// core components
import NoAuthHeaderLinks from "components/Header/NoAuthHeaderLinks.jsx"
import AuthHeaderLinks from "components/Header/AuthHeaderLinks.jsx"

import Sidebar from '../../components/Sidebar/Sidebar'
import Outline from "../../components/Outline/Outline"
import Comments from "../../components/Comments/Comments"
import Timeline from "../../components/Timeline/Timeline"

const AppPage = ({ classes, login, register, ...rest }) => {
  const [projectComponents, setProjectComponents] = useState([])
  const [milestones, setMilestones] = useState([])
  const [components, setComponents] = useState([])
  const [activeComponent, setActiveComponent] = useState('')
  const [activeComponentId, setActiveComponentId] = useState(null)
  const [activeComponentIndex, setActiveComponentIndex] = useState(null)

  const [activeItem, setActiveItem] = useState(null)

  async function getComponents() {
    try {
      const apiProjectComponents = await ProjectAPI.getComponents()
      console.log(apiProjectComponents)
      setProjectComponents(apiProjectComponents)
      setComponents(apiProjectComponents.map(component => component.component_name))
      setMilestones(apiProjectComponents[activeComponentIndex ? activeComponentIndex : 0].milestones)
      setActiveComponent(apiProjectComponents[activeComponentIndex ? activeComponentIndex : 0].component_name)
      setActiveComponentId(apiProjectComponents[activeComponentIndex ? activeComponentIndex : 0].project_component_id)
    } 
    catch (error) {}  
  }

  useEffect(() => getComponents(), [])

  useEffect(() => {
    if (document.getElementById(activeItem)) {
      document.getElementById(activeItem).scrollIntoViewIfNeeded({ behavior: 'smooth', block: 'nearest', inline: 'start' })
      

    }
    console.log(activeItem)
  }, [activeItem])

  useEffect(() => {
    const newActiveComponentIndex = projectComponents.findIndex(component => component.component_name === activeComponent)
    setActiveComponentIndex(newActiveComponentIndex)
    if (newActiveComponentIndex >= 0) {
      setMilestones(projectComponents[newActiveComponentIndex].milestones)
      setActiveComponentId(projectComponents[newActiveComponentIndex].id)
    }
  }, [activeComponent])

  return (
    <S.AppPage>
      <S.HeaderContainer>
        {
          Authentication.loggedIn()
          ? <AuthHeaderLinks />
          : <NoAuthHeaderLinks loginPage={login} registerPage={register} />
        }
      </S.HeaderContainer>

      <Sidebar 
        components={components} 
        activeComponent={activeComponent} 
        onClickFunction={payload => setActiveComponent(payload)}
      />
      <Outline 
        milestones={milestones}
        activeComponent={activeComponent}
        updateCallback={getComponents}
        setActiveItem={setActiveItem}
        activeItem={activeItem}
      />
      <Timeline
        milestones={milestones}
        activeComponent={activeComponent}
        activeComponentId={activeComponentId}
        updateCallback={getComponents}
        setActiveItem={setActiveItem}
        activeItem={activeItem}
      />
      <Comments />
    </S.AppPage>
  )
}

export default AppPage
