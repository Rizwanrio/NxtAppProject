import styled from 'styled-components'

export const LoaderDiv = styled.div`
  width: 80vw;
  display: flex;
  justify-content: center;
`
export const MainCont = styled.div`
  display: flex;
`
export const TrendCont = styled.div`
  overflow: scroll;
  background-color: ${props =>
    props.activeTheme === 'light' ? '#f9f9f9' : '#0f0f0f'};
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 85vw;
`
export const TrendHead = styled.div`
  padding-left: 40px;
  color: red;
  display: flex;
  font-size: 22px;
  align-items: center;
  background-color: ${props =>
    props.activeTheme === 'light' ? '#94a3b8' : '#231f20'};
`
export const TrendName = styled.h1`
  font-size: 32px;
  margin-left: 10px;
  color: ${props => (props.activeTheme === 'light' ? '#000000' : '#ffffff')};
`

export const ListDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
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
