import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const ThumbnailBox = styled.div`
  width: 25vw;
  margin-bottom: 20px;

  box-sizing: border-box;
`

export const ThumbnailImg = styled.img`
  heigth: 350px;
  width: 350px;
`
export const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const ChannelProfile = styled.img`
  height: 30px;
  margin-right: 5px;
  align-self: flex-start;
  margin-top: 15px;
`

export const TitleName = styled.p`
  color: ${props => (props.activeTheme ? '#000000' : '#ffffff')};
`
export const ChannelName = styled.p`
  color: grey;
`
export const ChannelDetails = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoStat = styled.div`
  color: grey;
  display: flex;
  align-items: center;
`

export const LinkThumbnail = styled(Link)`
  text-decoration: none;
`
