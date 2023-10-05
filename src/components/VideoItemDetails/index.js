import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player/lazy'
import Loader from 'react-loader-spinner'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  VideoDetailsDiv,
  LoaderDiv1,
  DetailsMain,
  Title,
  VideoStat,
  StatDiv,
  LikeButton,
  DislikeButton,
  SaveButton,
  ActionDiv,
  ChannelDiv,
  ChannelImg,
  Descp,
  NoVideo,
  ErrorImg,
  MatterDiv,
  RetryBtn,
} from './styledComponents'
import ThemeContext from '../../Context/ThemeContext'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    like: '',
    dislike: '',
    saved: false,
    videoData: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getVideoItemData()
  }

  renderVideos = (theme, addSave, savedItems, removeSave) => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderVideoPlayer(theme, addSave, savedItems, removeSave)
      case apiStatusConstants.failure:
        return this.renderVideoFailureView(theme)
      case apiStatusConstants.inProgress:
        return this.renderLoader()
      default:
        return null
    }
  }

  getVideoItemData = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)

    if (response.ok) {
      const data = await response.json()

      const updatedData = {
        videoDetails: {
          id: data.video_details.id,
          title: data.video_details.title,
          videoUrl: data.video_details.video_url,
          thumbnailUrl: data.video_details.thumbnail_url,
          channel: {
            name: data.video_details.channel.name,
            profileImageUrl: data.video_details.channel.profile_image_url,
            subscriberCount: data.video_details.channel.subscriber_count,
          },
          viewCount: data.video_details.view_count,
          publishedAt: data.video_details.published_at,
          description: data.video_details.description,
        },
      }

      this.setState({
        videoData: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  likeBtn = () => {
    this.setState(prev => ({
      like: prev.like === '' ? true : !prev.like,
      dislike: false,
    }))
  }

  disLikeBtn = () => {
    this.setState(prev => ({
      like: false,
      dislike: prev.like === '' ? true : !prev.dislike,
    }))
  }

  SaveBtn = () => {
    this.setState(prev => ({saved: !prev.saved}))
  }

  renderVideoPlayer = (theme, addSave, savedItems, removeSave) => {
    const {videoData, like, dislike, saved} = this.state
    const savedStatus = savedItems.filter(
      el => el.videoDetails.id === videoData.videoDetails.id,
    )
    console.log(savedStatus)
    const time = formatDistanceToNow(
      new Date(videoData.videoDetails.publishedAt),
    ).split(' ')
    const ans = `${time[1]} years`
    const saveName = savedStatus.length !== 0 ? 'Saved' : 'Save'
    const saving = () => {
      this.setState(prev => ({saved: !prev.saved}), addSave(videoData))
    }

    const removing = () => {
      removeSave(videoData.videoDetails.id)
    }
    return (
      <>
        <ReactPlayer
          url={videoData.videoDetails.videoUrl}
          width="80vw"
          height="60vh"
        />
        <Title theme={theme}>{videoData.videoDetails.title}</Title>
        <StatDiv>
          <VideoStat>
            {videoData.videoDetails.viewCount} views
            <ul>
              <li>{ans}</li>
            </ul>
          </VideoStat>
          <ActionDiv>
            <LikeButton like={like} onClick={this.likeBtn}>
              <AiOutlineLike />
              Like
            </LikeButton>
            <DislikeButton dislike={dislike} onClick={this.disLikeBtn}>
              <AiOutlineDislike />
              Dislike
            </DislikeButton>
            <SaveButton
              saved={savedStatus.length !== 0}
              onClick={savedStatus.length !== 0 ? removing : saving}
            >
              <MdPlaylistAdd />
              {saveName}
            </SaveButton>
          </ActionDiv>
        </StatDiv>
        <hr />
        <ChannelDiv theme={theme}>
          <ChannelImg src={videoData.videoDetails.channel.profileImageUrl} />
          <div>
            <p>{videoData.videoDetails.channel.name}</p>
            <p>{`${videoData.videoDetails.channel.subscriberCount} Subscribers`}</p>
            <Descp>{videoData.videoDetails.description}</Descp>
          </div>
        </ChannelDiv>
      </>
    )
  }

  renderVideoFailureView = theme => {
    const imgVal = theme === 'light' ? 'light' : 'dark'
    return (
      <NoVideo>
        <ErrorImg
          src={`https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-${imgVal}-theme-img.png`}
          alt="failure"
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

  renderLoader = () => (
    <LoaderDiv1 data-testid="loader">
      <Loader type="ThreeDots" color="blue" height="50" width="50" />
    </LoaderDiv1>
  )

  render() {
    return (
      <div>
        <Header />
        <DetailsMain>
          <SideBar />
          <ThemeContext.Consumer>
            {value => {
              const {activeTheme, addSave, savedItems, removeSave} = value
              return (
                <VideoDetailsDiv
                  data-testid="videoItemDetails"
                  activeTheme={activeTheme === 'light'}
                >
                  <div>
                    {this.renderVideos(
                      activeTheme,
                      addSave,
                      savedItems,
                      removeSave,
                    )}
                  </div>
                </VideoDetailsDiv>
              )
            }}
          </ThemeContext.Consumer>
        </DetailsMain>
      </div>
    )
  }
}

export default VideoItemDetails
