import styled from 'styled-components'
import COLORS from '@assets/theme/colors'

export const SideBar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: ${props => props.active ? '250px' : '60px'};
  transition: .3s ease;
  min-height: 100%;
  z-index: 100;
  background-color: ${COLORS.DARKER};
  display: flex;
  flex-direction: column;
`

export const Items = styled.ul`
  padding: 50px 0;
  position: relative;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
  color: ${COLORS.WHITE};
  left: 0
  a {
    text-decoration: none;
  }
`

export const Item = styled.li`
  padding: 10px 15px; 
  position: relative;
  left: 0;
  text-align: left;
  color: ${COLORS.WHITE};
  &:hover {
    background-color: ${COLORS.DARK};
  }
  i {
    vertical-align: text-bottom;
    padding-right: 10px;
  }
`

export const Container = styled.div`
  height: 90%;
  padding: 15px;
`

export const Menu = styled.div`
  cursor: pointer;
  color: ${COLORS.WHITE};
`