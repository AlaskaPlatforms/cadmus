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
  background-color: ${DARK};
  margin: 0;
`
export const Container = styled.div`
  margin-left: 250px;
  background-color: ${WHITE};
`
export const ButtonContainer = styled.div`
  display: inline-block;
  width: 100%;
`
export const Button = styled.button`
  text-transform: capitalize !important;
`
