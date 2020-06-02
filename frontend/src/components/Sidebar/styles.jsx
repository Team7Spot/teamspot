import styled from "styled-components";

export const Logo = styled.img`
  width: 36px;
  height: 36px;
  margin: 12px;
  margin-top: 24px;
`

export const Sidebar = styled.div`
  width: 72px;
  height: 100vh;
  background: var(--DarkColor);
  color: var(--TextColor);
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* background: var(--MediumColor);
  border-right: solid var(--DarkColor) 1px; */
`

export const HeaderText = styled.h1`
  font-size: var(--HeaderSize);
  font-weight: var(--HeaderWeight);
  padding: 16px;
`

export const Component = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 48px;
  height: 48px;
  margin: 6px 12px;
  font-weight: 600;
  background: ${props => props.active ? 'var(--HighlightColor)' : 'var(--LightColor)'};
  border-radius: ${props => props.active ? '16px' : '100%'};
  cursor: pointer;
  transition: .4s;
  &:hover {
    background: var(--HighlightColor);
    border-radius: 16px;
  }

  &:active {
    transform: translateY(1px);
  }
`

export const Spacer = styled.div`
  display: flex;
  flex-grow: 1;
`

export const Edit = styled.img`
  width: 24px;
  height: 24px;
`

export const SmallEdit = styled.img`
  width: 18px;
  height: 18px;
`

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`

export const TextInput = styled.input`
  display: flex;
  padding: 8px 8px;
  margin: 8px 0px;
  border-radius: 8px;
  width: calc(100% - 16px);
  height: 24px;
  border: none;
`

export const ButtonInput = styled.div`
  width: 100%;
  margin-top: 8px;
`

export const Delete = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  top: -4px;
  right: -4px;
  position: absolute;
  width: 24px;
  height: 24px;
  /* background: red;
  border-radius: 100%; */

  &:hover {
    transform: scale(1.5);
  }
`