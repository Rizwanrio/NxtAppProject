import {formatDistanceToNow} from 'date-fns'
import {
  ListVideo,
  ThumbImg,
  DetailsDiv,
  Title,
  VideoStat,
  LinkThumbnail,
} from './styledComponents'

const VideosList = props => {
  const {element, theme} = props
  const time = formatDistanceToNow(new Date(element.publishedAt)).split(' ')
  const ans = `${time[1]} years`
  return (
    <LinkThumbnail to={`/videos/${element.id}`}>
      <ListVideo>
        <ThumbImg src={element.thumbnailUrl} />
        <DetailsDiv activeTheme={theme}>
          <Title>{element.title}</Title>
          <div>
            <p>{element.channel.name}</p>
            <VideoStat>
              {element.viewCount} views
              <ul>
                <li>{ans}</li>
              </ul>
            </VideoStat>
          </div>
        </DetailsDiv>
      </ListVideo>
    </LinkThumbnail>
  )
}

export default VideosList
