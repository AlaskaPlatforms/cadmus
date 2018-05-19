import styled from 'styled-components'
import { COLORS } from '@assets/theme/Colors'

export const Header = styled.h1`
  padding: 15px;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.DARK_BLUE};
  border-radius: 5px 5px 0 0;
  margin: 0;
`
export const Container = styled.div`
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  width: 60%;
  margin: 15px auto;
  background-color: ${COLORS.WHITE};
`
export const InnerContainer = styled.div`
  padding: 15px;
`
export const TextArea = styled.textarea`
  width: 99%;
  border-radius: 5px;
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
`