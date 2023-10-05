import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideBar from '../SideBar'
import VideosList from '../VideosList'
import {
  TrendName,
  LoaderDiv,
  TrendCont,
  MainCont,
  TrendHead,
  Ulist,
  NoVideo,
  MatterDiv,
  RetryBtn,
  ErrorImg,
} from './styledComponents'
import ThemeContext from '../../Context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    trendingList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getTrending()
  }

  renderVideos = theme => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoSuccessView(theme)
      case apiStatusConstants.failure:
        return this.renderVideoFailureView(theme)
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  getTrending = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/trending'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const res = await fetch(apiUrl, options)

    if (res.ok) {
      const data = await res.json()
      const updatedData = data.videos.map(el => ({
        channel: {
          name: el.channel.name,
          profileImageUrl: el.channel.profile_image_url,
        },
        id: el.id,
        publishedAt: el.published_at,
        thumbnailUrl: el.thumbnail_url,
        title: el.title,
        viewCount: el.view_count,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        trendingList: updatedData,
      })
    }
    if (res.status === 401) {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderVideoFailureView = theme => {
    const imgVal = theme === 'light' ? 'light' : 'dark'
    return (
      <NoVideo>
        <ErrorImg
          src={`https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-${imgVal}-theme-img.png`}
          alt="failure view"
        />
        <MatterDiv activeTheme={theme === 'light'}>
          <h1>Oops! Something Went Wrong</h1>
          <p>
            We are having some trouble to complete your request. Please try
            again.
          </p>
        </MatterDiv>
        <RetryBtn type="button" onClick={this.getVideos}>
          Retry
        </RetryBtn>
      </NoVideo>
    )
  }

  renderVideoSuccessView = theme => {
    const {trendingList} = this.state
    return (
      <>
        {trendingList.map(el => (
          <VideosList element={el} theme={theme} key={el.id} />
        ))}
      </>
    )
  }

  renderLoader = () => (
    <LoaderDiv data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </LoaderDiv>
  )

  render() {
    return (
      <div>
        <Header />
        <MainCont>
          <SideBar />
          <ThemeContext.Consumer>
            {value => {
              const {activeTheme} = value
              return (
                <TrendCont data-testid="trending" activeTheme={activeTheme}>
                  <TrendHead activeTheme={activeTheme}>
                    <HiFire />
                    <TrendName activeTheme={activeTheme}>Trending</TrendName>
                  </TrendHead>
                  <Ulist>{this.renderVideos(activeTheme)}</Ulist>
                </TrendCont>
              )
            }}
          </ThemeContext.Consumer>
        </MainCont>
      </div>
    )
  }
}

export default Trending
