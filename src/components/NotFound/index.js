import Header from '../Header'
import SideBar from '../SideBar'
import {MainCont, TrendCont, FailDiv, FailedSav} from './styledComponents'
import ThemeContext from '../../Context/ThemeContext'

const NotFound = () => (
  <div>
    <Header />
    <MainCont>
      <SideBar />
      <ThemeContext.Consumer>
        {value => {
          const {activeTheme} = value
          const ImgName = activeTheme === 'light' ? 'light' : 'dark'
          return (
            <TrendCont activeTheme={activeTheme}>
              <FailDiv activeTheme={activeTheme}>
                <FailedSav
                  src={`https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-${ImgName}-theme-img.png`}
                  alt="not found"
                />
                <h1>Page Not Found</h1>
                <p>We are sorry, the page you requested cannot be found.</p>
              </FailDiv>
            </TrendCont>
          )
        }}
      </ThemeContext.Consumer>
    </MainCont>
  </div>
)

export default NotFound
