import styled from 'styled-components'
import COLORS from '@assets/theme/colors'

const { WHITE, DARK_BLUE } = COLORS

export const Form = styled.form`
  top: 0;
  padding: 15px;
  color: ${WHITE};
`
export const Header = styled.h1`
  padding: 15px;
  color: ${WHITE};
  background-color: ${DARK_BLUE};
  border-radius: 5px 5px 0 0;
  margin: 0;
`
export const Container = styled.div`
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  width: 60%;
  margin: 15px auto;
  background-color: ${WHITE};
`
export const ButtonContainer = styled.div`
  display: inline-block;
  width: 100%;
`
export const Button = styled.button`
  text-transform: capitalize !important;
`
