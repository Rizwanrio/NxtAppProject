import styled from 'styled-components'

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
