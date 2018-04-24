import { keyframes } from 'styled-components'

import COLORS from '@assets/theme/colors'

const { TEXT, BACKGROUND } = COLORS

export const fromBlackToBlue = keyframes`
  0% {
    color: ${TEXT};
  }

  100% {
    color: ${BACKGROUND};
  }
`

export const disappear = keyframes`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`

export const logoSlideMobile = keyframes`
  0% {
    left: 50%;
    top: 50%;
  }

  25% {
    left: 50%;
    top: 50%;
  }

  100% {
    left: 50%;
    top:  100px;
  }
`

export const logoSlideMedium = keyframes`
  100% {
    left: 11%;
    top:  60%;
  }
`

export const logoSlideXMedium = keyframes`
  100% {
    left: 15%;
    top:  60%;
  }
`

export const logoSlideLarge = keyframes`
  100% {
    left: 12%;
    top:  60%;
  }
`
