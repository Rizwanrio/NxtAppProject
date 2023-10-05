import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import VideoItemDetails from './components/VideoItemDetails'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './Context/ThemeContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {activeTheme: 'light', listData: []}

  changeTheme = activeTheme => {
    this.setState({activeTheme})
  }

  addSave = dataIn => {
    this.setState(prev => ({listData: [...prev.listData, dataIn]}))
  }

  removeSave = idNo => {
    this.setState(prev => ({
      listData: prev.listData.filter(el => el.videoDetails.id !== idNo),
    }))
  }

  render() {
    const {activeTheme, listData} = this.state
    return (
      <ThemeContext.Provider
        value={{
          activeTheme,
          changeTheme: this.changeTheme,
          addSave: this.addSave,
          savedItems: listData,
          removeSave: this.removeSave,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
