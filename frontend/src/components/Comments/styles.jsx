import styled from "styled-components";

export const Comments = styled.div`
  min-width: 446px;
  height: 100vh;
  background: var(--MediumColor);
  color: var(--TextColor);
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
  width: 100%;
  height: calc(100vh - 64px);
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
`;

export const CommentInput = styled.input`
  position: absolute;
  bottom: 0px;
  left: 16px; 
  z-index: 1;
  width: calc(100% - 32px);
`
