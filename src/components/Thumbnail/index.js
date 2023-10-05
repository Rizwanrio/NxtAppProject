import {formatDistanceToNow} from 'date-fns'
import {
  ThumbnailBox,
  ThumbnailImg,
  TitleDiv,
  ChannelProfile,
  TitleName,
  ChannelName,
  ChannelDetails,
  VideoStat,
  LinkThumbnail,
} from './styledComponents'
import ThemeContext from '../../Context/ThemeContext'

const ThumbnailComp = props => {
  const {element} = props
  const time = formatDistanceToNow(new Date(element.publishedAt)).split(' ')
  const ans = `${time[1]} years`
  return (
    <LinkThumbnail to={`/videos/${element.id}`}>
      <ThemeContext.Consumer>
        {value => {
          const {activeTheme} = value
          return (
            <ThumbnailBox>
              <ThumbnailImg src={element.thumbnailUrl} alt={element.name} />
              <TitleDiv>
                <ChannelProfile
                  src={element.channel.profileImageUrl}
                  alt="profile-img"
                />
                <ChannelDetails>
                  <TitleName activeTheme={activeTheme === 'light'}>
                    {element.title}
                  </TitleName>
                  <ChannelName>{element.channel.name}</ChannelName>
                  <VideoStat>
                    {element.viewCount} views
                    <ul>
                      <li>{ans}</li>
                    </ul>
                  </VideoStat>
                </ChannelDetails>
              </TitleDiv>
            </ThumbnailBox>
          )
        }}
      </ThemeContext.Consumer>
    </LinkThumbnail>
  )
}

export default ThumbnailComp
