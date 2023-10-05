import {Link} from 'react-router-dom'
import styled from 'styled-components'

export const GameVideo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 20vw;
  box-sizing: border-box;
  margin-right: 10px;
`
export const ThumbImg = styled.img`
  height: 400px;
`
export const DetailsDiv = styled.div`
  margin-top: 10px;
  color: ${props => (props.activeTheme === 'light' ? '#000000' : '#ffffff')};
`

export const Title = styled.p`
  font-weight: 600;
`

export const LinkThumbnail = styled(Link)`
  text-decoration: none;
`
