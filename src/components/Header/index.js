import {FaMoon} from 'react-icons/fa'
import {FiSun} from 'react-icons/fi'
import Cookie from 'js-cookie'
import {withRouter} from 'react-router-dom'
import ThemeContext from '../../Context/ThemeContext'
import 'reactjs-popup/dist/index.css'

import {
  HeaderDiv,
  LogoImg,
  ProfileImg,
  HeaderRight,
  ThemeButton,
  LogoutBtn,
  PopupDiv,
  PopupBtn,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {activeTheme, changeTheme} = value
      const onChangeTheme = () => {
        const newTheme = activeTheme === 'light' ? 'dark' : 'light'
        changeTheme(newTheme)
      }

      const onClickLogout = () => {
        Cookie.remove('jwt_token')
        const {history} = props
        history.replace('/login')
      }

      const onClickHome = () => {
        const {history} = props
        history.replace('/')
      }

      return (
        <HeaderDiv activeTheme={activeTheme === 'light'}>
          <LogoImg
            src={`https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-${activeTheme}-theme-img.png`}
            alt="website logo"
            onClick={onClickHome}
          />
          <HeaderRight>
            <ThemeButton
              type="button"
              onClick={onChangeTheme}
              activeTheme={activeTheme === 'light'}
            >
              {activeTheme === 'light' && <FaMoon />}
              {activeTheme === 'dark' && <FiSun />}
            </ThemeButton>
            <ProfileImg
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
            />
            <div>
              <PopupDiv
                activeTheme={activeTheme === 'light'}
                modal
                trigger={
                  <LogoutBtn
                    type="button"
                    activeTheme={activeTheme === 'light'}
                  >
                    Logout
                  </LogoutBtn>
                }
              >
                {close => (
                  <>
                    <div>
                      <p>Are you sure you want to logout?</p>
                    </div>
                    <div>
                      <PopupBtn
                        type="button"
                        className="trigger-button"
                        cancel
                        onClick={() => close()}
                      >
                        Cancel
                      </PopupBtn>
                      <PopupBtn type="button" onClick={onClickLogout}>
                        Confirm
                      </PopupBtn>
                    </div>
                  </>
                )}
              </PopupDiv>
            </div>
          </HeaderRight>
        </HeaderDiv>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
