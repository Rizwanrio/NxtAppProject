import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {AiOutlineClose, AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import ThumbnailComp from '../Thumbnail'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  HomeDiv,
  HomeCont,
  VideoSection,
  BannerDiv,
  BannerIn,
  ImgLogo,
  GetIt,
  SearchDiv,
  SearchIconDiv,
  SearchIn,
  LoaderDiv,
  ContentSection,
  CloseBanner,
  ThumbnailDiv,
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

class Home extends Component {
  state = {
    videoList: [],
    banner: true,
    apiStatus: apiStatusConstants.initial,
    searchInput: '',
  }

  componentDidMount() {
    this.getVideos()
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

  searchValue = event => {
    this.setState({searchInput: event.target.value})
  }

  startSearch = () => {
    console.log('hi')
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInput} = this.state
    console.log(searchInput)
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const res = await fetch(apiUrl, options)
    console.log(res)
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
        videoList: updatedData,
      })
    } else {
      console.log('hi')
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderVideoSuccessView = theme => {
    const {videoList} = this.state
    if (videoList.length > 0) {
      return (
        <ThumbnailDiv>
          {videoList.map(el => (
            <ThumbnailComp element={el} key={el.id} />
          ))}
        </ThumbnailDiv>
      )
    }
    return (
      <NoVideo>
        <ErrorImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <MatterDiv activeTheme={theme === 'light'}>
          <h1>No Search results found</h1>
          <p>Try different key words or remove search filter</p>
        </MatterDiv>
        <RetryBtn type="button" onClick={this.getVideos}>
          Retry
        </RetryBtn>
      </NoVideo>
    )
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

  closeBanner = () => {
    this.setState({banner: false})
  }

  renderLoader = () => (
    <LoaderDiv data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </LoaderDiv>
  )

  renderBanner = () => (
    <BannerDiv data-testid="banner">
      <BannerIn>
        <div>
          <ImgLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="nxt watch logo"
          />
          <p>Buy Nxt Watch Premium prepaid plans with UPI</p>
          <GetIt>GET IT NOW</GetIt>
        </div>
        <CloseBanner
          type="button"
          onClick={this.closeBanner}
          data-testid="close"
        >
          <AiOutlineClose />
        </CloseBanner>
      </BannerIn>
    </BannerDiv>
  )

  render() {
    const {banner, searchInput, videoList} = this.state
    console.log(videoList)
    return (
      <HomeDiv>
        <Header />
        <HomeCont>
          <SideBar />
          <ThemeContext.Consumer>
            {value => {
              const {activeTheme} = value
              return (
                <ContentSection
                  activeTheme={activeTheme === 'light'}
                  data-testid="home"
                >
                  {banner && this.renderBanner()}
                  <VideoSection>
                    <SearchDiv>
                      <SearchIn
                        type="text"
                        value={searchInput}
                        placeholder="Search"
                        onChange={this.searchValue}
                        activeTheme={activeTheme === 'light'}
                      />
                      <SearchIconDiv
                        type="button"
                        onClick={this.startSearch}
                        activeTheme={activeTheme === 'light'}
                      >
                        <AiOutlineSearch />
                      </SearchIconDiv>
                    </SearchDiv>
                    {this.renderVideos(activeTheme)}
                  </VideoSection>
                </ContentSection>
              )
            }}
          </ThemeContext.Consumer>
        </HomeCont>
      </HomeDiv>
    )
  }
}

export default Home
