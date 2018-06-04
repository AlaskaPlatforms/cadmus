import styled from 'styled-components'

export const SideBar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 250px;
  height: 100%;
  z-index: 100;
  background-color: #555;
  padding: 15px 0;
`

export const Items = styled.ul`
  display: inline-block;
  font-size: 18px;
  align-items: center;
  cursor: pointer;
  width: 100%;
  color: #fff;
`

export const Item = styled.li`
  font-family: ;
  text-align: left;
  margin: 0 auto;
  width: 100%;
  display: block;
  padding: 5px 15px;
  &:hover {
    background-color: #333;
  }
`

export const Container = styled.div`
  height: 90%;
  padding: 15px;
  margin: 15px 15px 15px 265px;
`

export const Panel = styled.div`

`

export const Header = styled.h4`
  margin: 0 0 15px 0;
`

export const UserIcon = styled.div`
  margin-left: 95%;
  padding: 0;
  display: ;
  &:hover {
    
  }
`