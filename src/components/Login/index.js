import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {Component} from 'react'
import {
  LoginContainer,
  ResponsiveContainer,
  LogoContainer,
  Image,
  FormContainer,
  Label,
  Input,
  Button,
  ShowPasswordContainer,
  ErrorPara,
} from './styledComponents'

const logoLightTheme =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const logoDarkTheme =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isPasswordShow: false,
    isError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onToggleShowPassword = () => {
    this.setState(preState => ({
      isPasswordShow: !preState.isPasswordShow,
    }))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const url = `https://apis.ccbp.in/login`
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.setState({isError: true, errorMsg: data.error_msg})
    }
  }

  renderUsername = () => {
    const {username} = this.state
    return (
      <>
        <Label htmlFor="usernameInput">USERNAME</Label>
        <Input
          id="usernameInput"
          type="text"
          value={username}
          placeholder="Username"
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPassword = () => {
    const {password, isPasswordShow} = this.state
    return (
      <>
        <Label htmlFor="passwordInput">PASSWORD</Label>
        <Input
          id="passwordInput"
          type={isPasswordShow ? 'text' : 'password'}
          value={password}
          placeholder="Password"
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderShowPassword = () => {
    const {isPasswordShow} = this.state
    return (
      <ShowPasswordContainer>
        <Input
          type="checkbox"
          id="myCheckbox"
          checkbox
          checked={isPasswordShow}
          onChange={this.onToggleShowPassword}
        />
        <Label showPassword htmlFor="myCheckbox">
          Show Password
        </Label>
      </ShowPasswordContainer>
    )
  }

  render() {
    const {isError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <LoginContainer>
        <ResponsiveContainer>
          <LogoContainer>
            <Image src={logoLightTheme} alt="website logo" />
          </LogoContainer>
          <FormContainer onSubmit={this.onSubmitForm}>
            {this.renderUsername()}
            {this.renderPassword()}
            {this.renderShowPassword()}
            <Button type="submit">Login</Button>
            {isError && <ErrorPara>*{errorMsg}</ErrorPara>}
          </FormContainer>
        </ResponsiveContainer>
      </LoginContainer>
    )
  }
}

export default Login
