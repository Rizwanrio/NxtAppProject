import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  Main,
  Form,
  Err,
  LogCont,
  LoginLogo,
  LoginBtn,
  Label,
  Input,
} from './styledComponents'
import ThemeContext from '../../Context/ThemeContext'

class Login extends Component {
  state = {
    userName: '',
    pwd: '',
    errorMsg: '',
    showPwd: false,
    showSubmitError: false,
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  submitBtn = async event => {
    event.preventDefault()
    const {userName, pwd} = this.state
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify({username: userName, password: pwd}),
    }
    const res = await fetch(apiUrl, options)
    const data = await res.json()
    if (res.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  UserNameBtn = event => {
    this.setState({userName: event.target.value})
  }

  pwdBtn = event => {
    this.setState({pwd: event.target.value})
  }

  chkBtn = event => {
    this.setState({showPwd: event.target.checked})
  }

  render() {
    const {userName, pwd, showPwd, showSubmitError, errorMsg} = this.state
    const pwdType = showPwd ? 'text' : 'password'
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeTheme} = value
          const logoName = activeTheme === 'light' ? 'light' : 'dark'
          return (
            <Main activeTheme={activeTheme === 'light'}>
              <LogCont activeTheme={activeTheme === 'light'}>
                <LoginLogo
                  src={`https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-${logoName}-theme-img.png`}
                  alt="website logo"
                />
                <Form onSubmit={this.submitBtn}>
                  <Label htmlFor="user">USERNAME</Label>
                  <Input
                    type="text"
                    id="user"
                    value={userName}
                    placeholder="Username"
                    onChange={this.UserNameBtn}
                    activeTheme={activeTheme === 'light'}
                  />
                  <Label htmlFor="pwd">PASSWORD</Label>
                  <Input
                    type={pwdType}
                    id="pwd"
                    value={pwd}
                    placeholder="Password"
                    onChange={this.pwdBtn}
                    activeTheme={activeTheme === 'light'}
                  />
                  <div>
                    <Input type="checkbox" id="check" onClick={this.chkBtn} />
                    <Label htmlFor="check">Show Password</Label>
                  </div>
                  <LoginBtn type="submit">Login</LoginBtn>
                  {showSubmitError && <Err>{`*${errorMsg}`}</Err>}
                </Form>
              </LogCont>
            </Main>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Login
