import * as S from "./styles"

import React, { useEffect, useState } from "react"

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
  const [activeComponent, setActiveComponent] = useState('')
  const [activeComponentId, setActiveComponentId] = useState(null)
  const [activeComponentIndex, setActiveComponentIndex] = useState(null)
  const [activeItem, setActiveItem] = useState(null)

  async function getComponents() {
    try {
      const apiProjectComponents = await ProjectAPI.getComponents()
      console.log(apiProjectComponents)
      setProjectComponents(apiProjectComponents)
      setMilestones(apiProjectComponents[activeComponentIndex ? activeComponentIndex : 0].milestones)
      setActiveComponent(apiProjectComponents[activeComponentIndex ? activeComponentIndex : 0].component_name)
      if (!activeComponent) { setActiveComponentId(apiProjectComponents[0].project_component_id) }
    } 
    catch (error) {}  
  }

  useEffect(() => {getComponents()}, [])

  useEffect(() => {
    async function getUID() {
      try {
        const userID = await Authentication.getUID()
        console.log(userID)
      } 
      catch (error) {}  
    }
    getUID()
  }, [])

  useEffect(() => {
    const activeItemElement = document.getElementById(activeItem)
    if (activeItemElement) { activeItemElement.scrollIntoViewIfNeeded()}
  }, [activeItem])

  // set milestones, active component index, and active component id
  useEffect(() => {
    const newActiveComponentIndex = projectComponents.findIndex(component => component.component_name === activeComponent)
    setActiveComponentIndex(newActiveComponentIndex)
    if (newActiveComponentIndex >= 0) {
      setMilestones(projectComponents[newActiveComponentIndex].milestones)
      setActiveComponentId(projectComponents[newActiveComponentIndex].id)
    }
  }, [activeComponent])

  const resetActiveComponent = () => {
    setActiveComponent(projectComponents[0].component_name)
    setActiveComponentId(projectComponents[0].project_component_id)
  }

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
        projectComponents={projectComponents} 
        activeComponent={activeComponent} 
        onClickFunction={payload => setActiveComponent(payload)}
        updateCallback={getComponents}
        resetActiveComponent={resetActiveComponent}
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
