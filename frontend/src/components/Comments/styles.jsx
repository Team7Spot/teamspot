import styled from "styled-components";

export const Comments = styled.div`
  max-width: 446px;
  min-width: 446px;
  height: 100vh;
  background: var(--MediumColor);
  color: var(--TextColor);
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  width: 100%;
  height: var(--HeaderHeight);
  background: var(--MediumColor);
  border-bottom: solid var(--DarkColor) 1px;
`;

export const HeaderText = styled.h1`
  font-size: var(--HeaderSize);
  font-weight: var(--HeaderWeight);
  padding: 16px;
`;

export const Content = styled.div`
  position: relative;
  width: calc(100% - 32px);
  height: 100%;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const CommentInput = styled.input`
  background: var(--ButtonColor);
  border: none;
  border-radius: 16px;
  position: absolute;
  bottom: 16px;
  left: 16px; 
  z-index: 1;
  width: calc(100% - 64px);
  height: 24px;
  padding: 8px 16px;
  color: var(--TextColor);
`

export const SubmitComment = styled.div`
  background: var(--LightColor);
  border: none;
  border-radius: 8px;
  position: absolute;
  bottom: 24px;
  right: 24px; 
  z-index: 2;
  height: 24px;
  width: 24px;
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--TextColor);
  cursor: pointer;
  transition: .4s;
  &:hover {
    background: var(--HighlightColor);
  }
`
