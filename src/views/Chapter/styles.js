import styled from 'styled-components'
import COLORS from '@assets/theme/colors'

export const Header = styled.h1`
  padding: 15px;
  color: ${COLORS.WHITE};
  background-color: #222;
  margin: 0;
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
`
export const InnerContainer = styled.div`
  padding: 15px;
  background-color: #c8c7c7;
`
export const TextArea = styled.textarea`
  display: inline-block;
  width: 99%;
  border-radius: 3px;
  height: 100%;
  font: inherit;
  padding-top: 5px;
  padding-left: 5px;
  outline: 0;
  &:hover {
    border: 2px solid #000;
    padding-top: 4px;
    padding-left: 4px;
  }
  &:focus {
    border: 2px solid #1565c0;
    padding-top: 4px;
    padding-left: 4px;
  }
  ${props => props.error ? `
    border: 2px solid ${COLORS.RED};
  ` : `
    border: 2px solid ${COLORS.BLACK}
  `}
  background-color: #c8c7c7;
`
export const ButtonContainer = styled.div`
  display: inline-block;
  width: 100%;
`