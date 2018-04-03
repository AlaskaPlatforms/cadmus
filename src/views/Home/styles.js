import styled from 'styled-components'

export const Card = styled.div`
  width: 60%;
  margin: 150px auto;
  height: 500px;
  top: 50%;
  color: #fff;
  text-align: center;
  animation-name: example;
  animation-duration: 2s;
  animation-timing-function: ease-in-out;
  @keyframes example {
    0%   {opacity: 0;}
    25%  {opacity: 0.25;}
    50%  {opacity: 0.5;}
    75%  {opacity: 0.75;}
    100% {opacity: 1;}
}
`

export const Text = styled.span`
  font-size: 130px;
`