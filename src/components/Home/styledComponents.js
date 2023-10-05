import styled from 'styled-components'

export const HomeDiv = styled.div`
display:flex;
flex-direction:column;
  color: #0070c1;
  height:100%
  font-family: "Roboto";

 

`
export const HomeCont = styled.div`
  display: flex;
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;
  overflow: scroll;
  background-color: ${props => (props.activeTheme ? '#f9f9f9' : '#181818')};
`

export const BannerDiv = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 85vw;
  height: 20vh;
  padding: 20px;
`
export const BannerIn = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ImgLogo = styled.img`
  height: 30px;
`
export const GetIt = styled.button`
  border-style: solid;
  border-color: grey;
  color: grey;
  background-color: transparent;
`
export const SearchDiv1 = styled.div`
  height: 30px;
  border-style: solid;
`

export const SearchDiv = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
export const SearchIn = styled.input`
  width: 210px;
  margin: 0;
  height: 30px;
  background-color: ${props => (props.activeTheme ? 'default' : '#181818')};
  color: ${props => (props.activeTheme ? 'default' : '#ffffff')};
`

export const SearchIconDiv = styled.button`
  border-style: none;
  height: 30px;
  width: 50px;
  background-color: ${props => (props.activeTheme ? '#cccccc' : '#383838')};
  color: ${props => (props.activeTheme ? 'default' : '#cccccc')}; ;
`
export const VideoSection = styled.div`
  width: 85vw;
  height: 70vh;
  padding-left: 20px;

  padding-top: 10px;
`
export const CloseBanner = styled.button`
  border-style: none;
  align-self: flex-start;
  background-color: transparent;
  font-size: 15px;
  font-weight: 600;
`
export const ThumbnailDiv = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 75vw;
`
export const LoaderDiv = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
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
