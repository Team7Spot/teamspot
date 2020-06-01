import styled, { keyframes, css } from "styled-components";

export const Button = styled.div`
  color: var(--Text) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  min-width: 24px;
  padding: ${props => (props.square ? "8px" : "12px 24px")};
  border-radius: 16px;
  margin: 4px;
  background: ${props => props.emphasize ? "var(--HighlightColor)" : props.outline ? 'none' :"var(--ButtonColor)"};
  box-shadow: ${props => props.outline ? "0 0 0 2px white" : "none"};
  cursor: pointer;
  &:hover {
    background: var(--HighlightColor);
  }
  &:active {
    background: var(--HighlightColor);
    transform: translateY(1px);
  }
`;

export const Text = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 0;
  margin-left: ${props => (props.icon ? "8px" : "0px")};
  color: white;
`;
