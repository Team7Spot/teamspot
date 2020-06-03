import styled from "styled-components";

export const Outline = styled.div`
  width: 272px;
  min-width: 272px;
  height: 100vh;
  background: var(--MediumColor);
  color: var(--TextColor);
`

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  height: var(--HeaderHeight);
  background: var(--MediumColor);
  border-bottom: solid var(--DarkColor) 1px;
`

export const HeaderText = styled.h1`
  font-size: var(--HeaderSize);
  font-weight: var(--HeaderWeight);
  padding: 16px;
`

export const Content = styled.div`
  max-height: calc(100vh - 48px);
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: flex-start;
  overflow-y: auto;
`

export const MilestoneContainer = styled.div`
  padding: 8px;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`

export const Milestone = styled.h3`
  font-size: var(--LargeSize);
  margin: 0;
  display: flex;
  flex-basis: 100%;
  font-weight: 400;
  padding: 8px;
  background: ${props => props.active ? 'var(--HighlightColor)' : 'none'};
  border-radius: 4px;
  cursor: pointer;
`

export const Task = styled.h5`
  font-size: var(--SmallSize);
  display: flex;
  flex-basis: 100%;
  border-radius: 4px;
  margin: 0;
  font-weight: 400;
  padding: 8px;
  background: ${props => props.active ? 'var(--HighlightColor)' : 'none'};
  cursor: pointer;
`
