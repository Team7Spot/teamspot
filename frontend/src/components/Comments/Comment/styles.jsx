import styled from "styled-components";

export const Comment = styled.div`
  position: relative;
  display: flex;
  margin-left: auto;
  width: calc(100% - 56px);
  color: var(--TextColor);
  margin-bottom: 32px;
  flex-wrap: wrap;
`

export const ProfilePic = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  background: var(--LightColor);
  left: -56px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: var(--LargeSize);
  font-weight: 600;
`

export const Header = styled.div`
  width: 100%;
`

export const Name = styled.div`
  display: flex;
  text-align: left;
  font-weight: 600;
  font-size: var(--SmallSize);
  flex-grow: 1;
  margin-bottom: 8px;

`

export const Date = styled.div`
  display: flex;
  text-align: right;
  font-size: var(--SmallSize);
  color: #aaa;
  margin-bottom: 8px;
`

export const Body = styled.div`
  text-align: left;
  font-size: var(--SmallSize);
  width: 100%;
`
