import styled from 'styled-components'
import COLORS from '@assets/theme/colors'

export const Header = styled.h1`
  padding: 15px;
  color: ${COLORS.WHITE};
  background-color: #222;
  margin: 0;
  position: fixed;
  top: 0;
  right: 0;
  left: ${props => props.active ? '250px' : '60px'};
  transition: .3s ease;
  font-size: 20px;
  min-height: 35px;
  @media (min-width: 640px) {
    font-size: 2em;
  }
`
export const Container = styled.div`
  margin-left: ${props => props.active ? '250px' : '60px'};
  background-color: #c8c7c7;
  transition: .3s ease;
  position: absolute; 
  overflow-y: auto;
  bottom: 0;
  top: 65px;
  right: 0;
  left: 0;  
`
export const Title = styled.h1`
  text-align: center;
`
export const ChapterWrapper = styled.div`
  padding: 0 15px;
  text-align: justify;
  overflow-y: auto;
  @media (min-width: 640px) {
    padding: 0 15%;
    line-height: 1.5;
  }
  font-size: 22px;
  background-color: #c8c7c7;
  position: relative;
  bottom: 0 !important;
  height: 100%;
`
export const ButtonContainer = styled.div`
  display: inline-block;
  width: 100%;
  .btn-right {
    display: ${props => props.hasNext ? 'block' : 'none'};
  }
  .btn-left {
    display: ${props => props.hasPrevious ? 'block' : 'none'};
  }
`