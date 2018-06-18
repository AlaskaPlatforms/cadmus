import styled from 'styled-components'
import COLORS from '@assets/theme/colors'

export const Header = styled.h1`
  padding: 15px;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.DARK};
  margin: 0;
`
export const Container = styled.div`
  margin-left: 250px;
  background-color: ${COLORS.WHITE};
`
export const Title = styled.h1`
  text-align: center;
`
export const ChapterWrapper = styled.div`
  padding: 0 15px;
  overflow-y: auto;
`