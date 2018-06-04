import styled from 'styled-components'
import COLORS from '@assets/theme/colors'

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