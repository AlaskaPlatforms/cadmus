import styled from 'styled-components'
import COLORS from '@assets/theme/colors'

export const Header = styled.h1`
  padding: 15px;
  color: ${COLORS.WHITE};
  background-color: #222;
  margin: 0;
  min-height: 50px;
  font-size: 18px;
  @media (min-width: 640px) {
    font-size: 2em;
  }
`
export const Container = styled.div`
  margin-left: ${props => props.active ? '250px' : '60px'};
  background-color: #c8c7c7;
  transition: .3s ease;
  position: absolute; 
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;  
  div { background-color: #c8c7c7 !Important; }
`