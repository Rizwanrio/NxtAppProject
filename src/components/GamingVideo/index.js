import {
  GameVideo,
  ThumbImg,
  DetailsDiv,
  Title,
  LinkThumbnail,
} from './styledComponents'

const GamingVideo = props => {
  const {element, theme} = props
  return (
    <LinkThumbnail to={`/videos/${element.id}`}>
      <GameVideo>
        <ThumbImg src={element.thumbnailUrl} />
        <DetailsDiv activeTheme={theme}>
          <Title>{element.title}</Title>
          <p>{`${element.viewCount} Watching Worldwide`}</p>
        </DetailsDiv>
      </GameVideo>
    </LinkThumbnail>
  )
}

export default GamingVideo
