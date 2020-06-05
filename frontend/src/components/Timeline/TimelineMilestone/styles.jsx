import styled from "styled-components";

export const TimelineMilestone = styled.div`
  z-index: 1000;
  display: flex;
  width: calc(100% - 28px);
  margin-bottom: 16px;
  flex-wrap: wrap;
  user-select: none;
`

export const MilestoneBackground = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 8px;
  background: var(--CardColor);
`

export const Header = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  background: ${props => props.active ? 'var(--CardColor)' : 'var(--HighlightColor)'};
  padding: 16px;
  padding-bottom: ${props => props.active ? '8px' : '16px'};
  border-radius: 8px 8px 0px 0px;
  cursor: pointer;
`

export const Node = styled.div`
  position: absolute;
  z-index: 2;
  top: 16px;
  right: -38px;
  width: 24px;
  height: 24px;
  background: ${props => props.active ? 'white' : 'var(--HighlightColor)'};
  border-radius: 100%;
`

export const Name = styled.div`
  display: flex;
  font-size: var(--LargeSize);
`

export const Complete = styled.input`

`

export const Content = styled.div`
  width: 100%;
  padding: 16px;
  padding-top: 0;
`

export const Spacer = styled.div`
  display: flex;
  flex-grow: 1;
`

export const Deadline = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  font-size: var(--SmallSize);
`

export const TimelineDescription = styled.div`
  display: flex;
  flex-wrap: nowrap;
  margin: 8px 0px;
  margin-top: 16px;
  font-size: var(--SmallSize);
  width: 100%;
  user-select: auto !important;
`

export const EmojiButtons = styled.div`
  display: flex;
  flex-basis: 1;
  width: 100%;
`

export const Tasks = styled.div`
  width: 100%;
  flex-wrap: wrap;
  display: flex;
`

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`