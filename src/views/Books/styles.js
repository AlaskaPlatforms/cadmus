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
  background-color: ${COLORS.WHITE};
  transition: .3s ease;
`