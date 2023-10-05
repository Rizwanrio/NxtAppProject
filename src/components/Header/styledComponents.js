import Popup from 'reactjs-popup'
import styled from 'styled-components'

export const HeaderDiv = styled.div`
  background-color: ${props => (props.activeTheme ? '#ffffff' : '#313131')};
  height: 10vh;
  padding: 10px;
  font-family: 'Roboto';
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LogoImg = styled.img`
  height: 40px;
`

export const ProfileImg = styled.img`
  height: 30px;
`
export const HeaderRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 170px;
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border-style: none;
  font-size: 28px;
  color: ${props => (props.activeTheme ? '#000000' : '#ffffff')};
`
export const LogoutBtn = styled.button`
  background-color: transparent;
  border-style: solid;
  color: ${props => (props.activeTheme ? '#3b82f6' : '#ffffff')};
  border-color: ${props => (props.activeTheme ? '#3b82f6' : '#ffffff')};
`

export const PopupDiv = styled(Popup)`
  &-content {
    margin: auto;
    background: ${props =>
      props.activeTheme ? 'rgb(255, 255, 255)' : '#000000'};
    width: 25%;
    height: 20%;
    padding: 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    color: ${props => (props.activeTheme ? '#000000' : 'rgb(255, 255, 255)')};
  }
`

export const PopupBtn = styled.button`
  background-color: ${props => (props.cancel ? 'transparent' : '#3b82f6')};
  color: ${props => (props.cancel ? 'grey' : '#ffffff')};
  border-style: ${props => (props.cancel ? 'solid' : 'none')};
  border-color: 'grey';
  margin: 10px;
  height: 30px;
  width: 110px;
`
