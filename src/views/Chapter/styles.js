import styled from 'styled-components'
import COLORS from '@assets/theme/colors'

export const Header = styled.h1`
  padding: 15px;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.DARK};
  margin: 0;
`
export const Container = styled.div`
  margin-left: ${props => props.active ? '250px' : '60px'};
  transition: .3s ease;
`
export const InnerContainer = styled.div`
  padding: 15px;
  background-color: ${COLORS.WHITE};
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
`
export const ButtonContainer = styled.div`
  display: inline-block;
  width: 100%;
`