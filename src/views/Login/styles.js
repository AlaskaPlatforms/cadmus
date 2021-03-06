import styled from 'styled-components'

import COLORS from '@assets/theme/colors'
import {
  fromBlackToBlue,
  disappear,
  logoSlideMobile,
  logoSlideMedium,
  logoSlideXMedium,
  logoSlideLarge,
  appearAndSlideDown
} from '@assets/theme/animations'

const { WHITE } = COLORS

export const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`

export const InnerContainer = styled.div`
  width: 85%;
  height: 80%;
  background-color: ${WHITE};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  box-shadow: 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12), 0 2px 4px -1px rgba(0,0,0,0.3);
`

export const LogoContainer = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${logoSlideMobile} 2s 4s ease forwards;

  @media (min-width: 768px) {
    animation: ${logoSlideMedium} 2s 4s ease forwards;
  }

  @media (min-width: 1024px) {
    animation: ${logoSlideXMedium} 2s 4s ease forwards;
  }

  @media (min-width: 1360px) {
    animation: ${logoSlideLarge} 2s 4s ease forwards;
  }
`

export const LogoName = styled.div`
  display: flex;
  flex-direction: row;
`

export const LogoLetter = styled.span`
  font-family: inherit;
  font-weight: bold;
  font-size: 50px;

  animation-iteration-count: 1, 1;
  animation-name: ${fromBlackToBlue}, ${disappear};
  animation-duration: 0.3s, 0.3s;
  animation-direction: normal, normal;
  animation-fill-mode: forwards, forwards;
`

export const FormRelativeContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  opacity: 0;
  animation: ${appearAndSlideDown} .5s 6s ease forwards;
`

export const LoginFormContainer = styled.div`
  position: absolute;
  top: 125px;
  width: calc(100% - 30px);
  left: 15px;

  @media (min-width: 768px) {
    top: 50%;
    width: 235px;
    left: auto;
    right: 15px;
    transform: translateY(-50%);
  }

  @media (min-width: 840px) {
    width: 290px;
  }

  @media (min-width: 1024px) {
    right: 30px;
  }
`

export const RegisterFormContainer = styled.div`
  position: absolute;
  top: 100px;
  width: calc(100% - 30px);
  left: 15px;
  opacity: 0;

  @media (min-width: 768px) {
    top: 50%;
    width: 235px;
    left: auto;
    right: 15px;
    transform: translateY(-50%);
  }

  @media (min-width: 840px) {
    width: 290px;
  }

  @media (min-width: 1024px) {
    right: 30px;
  }
`
