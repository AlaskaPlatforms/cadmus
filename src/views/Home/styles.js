import styled from 'styled-components'

export const Main = styled.div`
  min-width: 1140px;
`

export const Header = styled.div`
  background-color: rgb(30, 30, 30);    
  position: relative;
`

export const HeaderNav = styled.div`
  padding: 32px 0;
`

export const HeaderHero = styled.div`
  text-align: center;
  padding: 88px 0 210px;
  z-index: 2;
  position: relative;  
`

export const HeaderCurve = styled.svg`
  width: 100%;
  height: 70px;
  position: absolute;
  bottom: 0;
  background-color: transparent;
  fill: rgb(86, 156, 214);
  stroke: rgb(86, 156, 214);
`

export const HeaderContainer = styled.div`
  width: 1120px;
  margin: 0 auto;
`

export const HeaderMenu = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: end;
  -webkit-justify-content: flex-end;
  -ms-flex-pack: end;
  justify-content: flex-end;
`

export const HeaderLogo = styled.img`
  float: left;
  width: 151px;
  display: block;
`

export const LinkButton = styled.a`
  display: inline-block;
  line-height: 39px;
  height: 39px;
  padding: 0 5px;
  font-family: inherit;
  font-size: 100%;
  font: inherit;
  text-decoration: none;
	color: rgb(86, 156, 214);
	cursor: pointer;  
`

export const CadmusMessage = styled.div`
  background-color: rgb(15, 15, 15);
  text-align: center;
  padding-top: 88px;
  margin-top: -1px;
`

export const CadmusMessageImg = styled.img`
  width: 64%;
  max-width: 800px;
`

export const Footer = styled.div`
  background-color: snow;
  text-align: center;
  position: relative;
  padding-top: 50px;
  padding-bottom: 70px;
`

export const FooterNav = styled.div`
  z-index: 2;
  position: relative;
`

export const FooterCopyright = styled.div`
  float: left;
  font-family: inherit;
  color: #8e8e93;
  font-size: 100%;
`

export const FooterMenu = styled.div`
  line-height: 21px;
  float: right;
`

export const LinkButtonFixedFooter = styled.a`
  display: inline-block;
  line-height: 21px;
  height: 21px;
  cursor: pointer;
  font-family: inherit;
  color: #8e8e93;
  font-size: 100%;
  font: inherit;
  margin-left: 40px;
  text-decoration: none;
`

export const ButtonLargeWhite = styled.div`
  background: rgba(128, 128, 128, 0.9);
  font-family: inherit;
  font-size: 22px;
  color: #fff;
  letter-spacing: 0;
  min-width: 200px;
  display: inline-block;
  padding: 14px 10px 16px;
  text-align: center;
  -webkit-transition: box-shadow .3s;
  transition: box-shadow .3s;
  cursor: pointer;
  text-decoration: none;
`

export const ButtonLargeBlue = styled.div`
  background: hsla(0,0%,100%,.22);
  font-family: inherit;
  font-size: 22px;
  color: rgb(86, 156, 214);;
  letter-spacing: 0;
  min-width: 200px;
  display: inline-block;
  padding: 14px 10px 16px;
  text-align: center;
  -webkit-transition: box-shadow .3s;
  transition: box-shadow .3s;
  margin-left: 40px;
  cursor: pointer;
`