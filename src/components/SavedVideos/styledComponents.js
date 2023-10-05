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

export const Ulist = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-top: 10px;
`
export const FailedSav = styled.img`
  height: 500px;
`
export const FailDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  color: transparent;
  color: ${props => (props.activeTheme === 'light' ? '#000000' : '#ffffff')};
`
