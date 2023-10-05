import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${props => (props.activeTheme ? '#cccccc' : '#313131')};
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Err = styled.p`
  color: red;
`
export const LogCont = styled.div`
  padding: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  background-color: ${props => (props.activeTheme ? '#ffffff' : '#000000')};
  color: ${props => (props.activeTheme ? 'default' : '#ffffff')};
`

export const LoginLogo = styled.img`
  height: 50px;
  margin-bottom: 20px;
`

export const LoginBtn = styled.button`
  background-color: #3b82f6;
  border-style: none;
  border-radius: 5px;
  color: #ffffff;
  margin-top: 20px;
`

export const Label = styled.label`
  font-size: 12px;
  margin-top: 10px;
`
export const Input = styled.input`
  font-size: 12px;
  margin-top: 4px;
  border-style: solid;
  border-color: #cccccc;
  border-width: 0.5px;
  padding-left: 10px;
  margin-bottom: 10px;
  background-color: ${props => (props.activeTheme ? 'dafault' : '#000000')};
  color: ${props => (props.activeTheme ? 'dafault' : '#ffffff')};
`
