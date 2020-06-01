import styled, { keyframes } from "styled-components"

export const HomePage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: var(--DarkColor); */
  width: 100%;
  height: 100vh;
`

const appear = keyframes`
{
  0% {
    transform: translateY(16px);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(0px);
  }
}
`

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 380px;
  animation: 1.4s ease-out 0s 1 ${appear} forwards;
`

export const Logo = styled.img`
  display: flex;
  width: 154px;
  height: 154px;
`

export const Name = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 32px;
  padding-bottom: 28px;
  font-size: 36px;
  color: white;
`

export const Description = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-bottom: 28px;
  font-size: 24px;
  color: white;
`

export const Auth = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

`

export const HeaderContainer = styled.div`
  position: absolute;
  right: 0;
  height: 64px;
`
