import {Switch, Redirect, Route} from 'react-router-dom'
import {Component} from 'react'
import './App.css'
import Login from './components/Login'
import Home from './components/Home'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import ThemeContext from './context/ThemeContext'

// Replace your code here

class App extends Component {
  state = {isDark: false}

  onClickChangeTheme = () => {
    this.setState(preState => ({isDark: !preState.isDark}))
  }

  render() {
    const {isDark} = this.state
    return (
      <ThemeContext.Provider
        value={{isDark, onClickChangeTheme: this.onClickChangeTheme}}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </ThemeContext.Provider>
    )
  }
}

export default App
