import styled from 'styled-components'
import COLORS from '@assets/theme/colors'

const { WHITE, DARK } = COLORS

export const Form = styled.form`
  top: 0;
  padding: 15px;
  color: ${WHITE};
`
export const Header = styled.h1`
  padding: 15px;
  color: ${WHITE};
  background-color: #222;
  margin: 0;
`
export const Container = styled.div`
  margin-left: ${props => props.active ? '250px' : '60px'};
  top: 0;
  right: 0;
  left: 0;  
`
export const ButtonContainer = styled.div`
  display: inline-block;
`
export const Button = styled.button`
  text-transform: capitalize !important;
`
