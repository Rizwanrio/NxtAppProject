import {Component} from 'react'

import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import SideBar from '../SideBar'
import VideosList from '../VideosList'
import {
  TrendName,
  TrendCont,
  MainCont,
  TrendHead,
  Ulist,
  FailDiv,
  FailedSav,
} from './styledComponents'
import ThemeContext from '../../Context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class SavedVideos extends Component {
  state = {
    savedList: [],
    apiStatus: apiStatusConstants.initial,
  }

  getTrending = savedItems => {
    if (savedItems.length === 0) {
      this.setState({apiStatus: apiStatusConstants.failure})
    } else {
      this.setState({apiStatus: apiStatusConstants.success})
    }
  }

  renderVideos = theme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoSuccessView(theme)
      case apiStatusConstants.failure:
        return this.renderVideoFailureView(theme)
      default:
        return null
    }
  }

  renderVideoSuccessView = (theme, savedItems) => {
    const {savedList} = this.state
    console.log(savedItems)
    if (savedItems.length !== 0) {
      return (
        <>
          <TrendHead activeTheme={theme}>
            <MdPlaylistAdd />
            <TrendName activeTheme={theme}>Saved Videos</TrendName>
          </TrendHead>
          <Ulist>
            {savedItems.map(el => (
              <VideosList element={el.videoDetails} theme={theme} key={el.id} />
            ))}
          </Ulist>
        </>
      )
    }
    return this.renderVideoFailureView(theme)
  }

  renderVideoFailureView = theme => (
    <FailDiv activeTheme={theme}>
      <FailedSav
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
        alt="no saved videos"
      />
      <h1>No Saved Videos Found</h1>
      <p>You can save your videos while watching them</p>
    </FailDiv>
  )

  render() {
    return (
      <div>
        <Header />
        <MainCont>
          <SideBar />
          <ThemeContext.Consumer>
            {value => {
              const {activeTheme, savedItems} = value

              return (
                <TrendCont data-testid="savedVideos" activeTheme={activeTheme}>
                  {this.renderVideoSuccessView(activeTheme, savedItems)}
                </TrendCont>
              )
            }}
          </ThemeContext.Consumer>
        </MainCont>
      </div>
    )
  }
}

export default SavedVideos
