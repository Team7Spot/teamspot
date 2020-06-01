import * as S from "./styles"

import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

import Authentication from "components/API/Authentication.js"

import NoAuthHeaderLinks from "components/Header/NoAuthHeaderLinks.jsx"
import AuthHeaderLinks from "components/Header/AuthHeaderLinks.jsx"

const HomePage = ({ login, register  }) => {

  const history = useHistory()

  useEffect(() => {
    if (Authentication.loggedIn()) history.push("/app")
  }, [])

  return (
    <S.HomePage>
      <S.Container>
        <S.Logo src={require('./teamspot-logo.svg')} />
        <S.Name>Teamspot</S.Name>
        <S.Description>Making project management fun and rewarding 🎉</S.Description>
        <S.Auth>
          {
            Authentication.loggedIn()
            ? <AuthHeaderLinks />
            : <NoAuthHeaderLinks loginPage={login} registerPage={register} />
          }
        </S.Auth>
      </S.Container>
    </S.HomePage>
  )
}

export default HomePage
