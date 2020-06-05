import styled from "styled-components";

export const TimelineTask = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  right: -64px;
  width: calc(100% - 96px);
  margin-top: 16px;
  padding: 16px;
  border-radius: 8px;
  background: var(--CardColor);
  box-shadow: ${props => props.active ? 'inset 0 0 0 1px #ccc' : 'inset 0 0 0 1px var(--HighlightColor)'};
  user-select: none;
`

export const Header = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  cursor: pointer;
`

export const Node = styled.div`
  position: absolute;
  z-index: 2;
  top: 0px;
  right: -51px;
  width: 18px;
  height: 18px;
  background: ${props => props.active ? 'white' : 'var(--HighlightColor)'};
  transform: rotate(45deg);
`

export const Name = styled.div`
  display: flex;
  font-size: 16px;
`

export const Complete = styled.input`

`

export const Spacer = styled.div`
  display: flex;
  flex-grow: 1;
`

export const Deadline = styled.div`
  display: flex;
  font-size: var(--SmallSize);
`

export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  margin: 8px 0px;
  font-size: var(--SmallSize);
  user-select: auto !important;
`

export const EmojiButtons = styled.div`
  display: flex;
  flex-basis: 1;
  width: 100%;
`

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`