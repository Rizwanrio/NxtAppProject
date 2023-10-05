import {Link} from 'react-router-dom'

import styled from 'styled-components'

export const SideDiv = styled.div`
  background-color: ${props => (props.activeTheme ? '#ffffff' : '#313131')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${props => (props.activeTheme ? '#000000' : '#ffffff')};
  width: 15vw;
  height: 90vh;
  padding: 0;
`

export const CatList = styled.div`
  padding: 0;
  color: grey;
`
export const LiEl = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  background-color: ${props =>
    // eslint-disable-next-line no-nested-ternary
    props.selected ? (props.activeTheme ? '#d7dfe9' : '#606060') : 'none'};
`
export const CatName = styled.p`
  margin-left: 20px;
  color: ${props =>
    // eslint-disable-next-line no-nested-ternary
    props.selected ? (props.activeTheme ? 'black' : 'white') : 'gray'};
  font-weight: ${props => (props.selected ? 500 : 600)};
`
export const LinkEl = styled(Link)`
  text-decoration: none;
  color: ${props => (props.selected ? 'red' : 'gray')};
`
export const SocialDiv = styled.div`
  display: flex;
`

export const SocialImg = styled.img`
  height: 30px;
  margin: 10px;
`

export const SideBottom = styled.div`
  padding: 10px;
`
