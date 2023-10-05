import styled from 'styled-components'

export const VideoDetailsDiv = styled.div`
  background-color: ${props => (props.activeTheme ? '#f9f9f9' : '#0f0f0f')};
  height: 90vh;
  width: 85vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  overflow: scroll;
`
export const LoaderDiv1 = styled.div`
  width: 90vw;
  display: flex;
  justify-content: center;
`
export const DetailsMain = styled.div`
  display: flex;
`
export const Title = styled.p`
  color: ${props => (props.theme === 'light' ? '#000000' : '#ffffff')};
`
export const StatDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vw;
`

export const VideoStat = styled.div`
  color: grey;
  display: flex;
  align-items: center;
`
export const LikeButton = styled.button`
  background-color: transparent;
  font-size: 18px;
  margin: 10px;
  border-style: none;
  height: 70px;
  color: ${props => (props.like ? '#2563eb' : '#64748b')};
`
export const DislikeButton = styled.button`
  background-color: transparent;
  font-size: 18px;
  margin: 10px;
  border-style: none;
  height: 70px;
  color: ${props => (props.dislike ? '#2563eb' : '#64748b')};
`
export const SaveButton = styled.button`
  background-color: transparent;
  font-size: 18px;
  margin: 10px;
  border-style: none;
  height: 70px;
  color: ${props => (props.saved ? '#2563eb' : '#64748b')};
`
export const ActionDiv = styled.div`
  display: flex;
  align-items: center;
`
export const ChannelDiv = styled.div`
  color: ${props => (props.theme === 'light' ? '#000000' : '#ffffff')};
  display: flex;
`
export const ChannelImg = styled.img`
  margin-right: 10px;
  margin-top: 10px;
  height: 50px;
`
export const Descp = styled.p`
  margin-top: 30px;
`
export const NoVideo = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const MatterDiv = styled.div`
  color: ${props => (props.activeTheme ? '#000000' : '#ffffff')};
`

export const RetryBtn = styled.button`
  background-color: blue;
  color: #ffffff;
  border-style: none;
  border-radius: 5px;
  width: 90px;
  height: 30px;
`

export const ErrorImg = styled.img`
  height: 300px;
`
