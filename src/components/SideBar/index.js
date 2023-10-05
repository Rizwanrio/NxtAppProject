import {Component} from 'react'
import {AiFillHome} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {HiFire} from 'react-icons/hi'
import {withRouter} from 'react-router-dom'

import {
  SideDiv,
  SideBottom,
  CatList,
  LiEl,
  CatName,
  LinkEl,
  SocialDiv,
  SocialImg,
} from './styledComponents'
import ThemeContext from '../../Context/ThemeContext'

class SideBar extends Component {
  state = {selected: ''}

  componentDidMount() {
    const {match} = this.props
    this.setState({selected: match.path.slice(1)})
  }

  onSelecthome = () => {
    this.setState({selected: 'home'})
  }

  onSelecttrend = () => {
    this.setState({selected: 'trending'})
  }

  onSelectgame = () => {
    this.setState({selected: 'game'})
  }

  onSelectsave = () => {
    this.setState({selected: 'saved-videos'})
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeTheme} = value
          const {selected} = this.state
          return (
            <SideDiv activeTheme={activeTheme === 'light'}>
              <CatList>
                <LinkEl
                  to="/"
                  selected={selected === ''}
                  onClick={this.onSelecthome}
                >
                  <LiEl
                    selected={selected === ''}
                    activeTheme={activeTheme === 'light'}
                  >
                    <AiFillHome />
                    <CatName
                      selected={selected === ''}
                      activeTheme={activeTheme === 'light'}
                    >
                      Home
                    </CatName>
                  </LiEl>
                </LinkEl>
                <LinkEl
                  to="/trending"
                  selected={selected === 'trending'}
                  onClick={this.onSelecttrend}
                >
                  <LiEl
                    selected={selected === 'trending'}
                    activeTheme={activeTheme === 'light'}
                  >
                    <HiFire />
                    <CatName
                      selected={selected === 'trending'}
                      activeTheme={activeTheme === 'light'}
                    >
                      Trending
                    </CatName>
                  </LiEl>
                </LinkEl>
                <LinkEl
                  to="/gaming"
                  selected={selected === 'gaming'}
                  onClick={this.onSelectgame}
                >
                  <LiEl
                    selected={selected === 'gaming'}
                    activeTheme={activeTheme === 'light'}
                  >
                    <SiYoutubegaming />
                    <CatName
                      selected={selected === 'gaming'}
                      activeTheme={activeTheme === 'light'}
                    >
                      Gaming
                    </CatName>
                  </LiEl>
                </LinkEl>
                <LinkEl
                  to="/saved-videos"
                  selected={selected === 'saved-videos'}
                  onClick={this.onSelectsave}
                >
                  <LiEl
                    selected={selected === 'saved-videos'}
                    activeTheme={activeTheme === 'light'}
                  >
                    <MdPlaylistAdd />
                    <CatName
                      selected={selected === 'saved-videos'}
                      activeTheme={activeTheme === 'light'}
                    >
                      Saved videos
                    </CatName>
                  </LiEl>
                </LinkEl>
              </CatList>
              <SideBottom>
                <p>Contact Us</p>
                <SocialDiv>
                  <SocialImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                    alt="facebook logo"
                  />
                  <SocialImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                    alt="twitter logo"
                  />
                  <SocialImg
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                    alt="linkedin logo"
                  />
                </SocialDiv>
                <p>Enjoy! Now to see your channels and recommendations!</p>
              </SideBottom>
            </SideDiv>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(SideBar)
