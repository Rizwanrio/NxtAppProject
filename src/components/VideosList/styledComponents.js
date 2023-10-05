import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ListVideo = styled.li`
  display: flex;
  margin-bottom: 20px;
`
export const ThumbImg = styled.img`
  height: 100px;
  width: 200px;
`
export const DetailsDiv = styled.div`
  margin-left: 10px;
  color: ${props => (props.activeTheme === 'light' ? '#000000' : '#ffffff')};
`

export const Title = styled.p`
  font-weight: 600;
`
export const VideoStat = styled.div`
  color: grey;
  display: flex;
  align-items: center;
`
export const LinkThumbnail = styled(Link)`
  text-decoration: none;
`
