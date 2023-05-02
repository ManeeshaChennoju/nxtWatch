import {Link, withRouter} from 'react-router-dom'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import {Component} from 'react'
import Cookies from 'js-cookie'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut, FiSun} from 'react-icons/fi'
import ThemeContext from '../../context/ThemeContext'
import {
  DesktopViewHeader,
  LogoImage,
  ItemsContainer,
  IconsButton,
  MobileViewHeader,
  LogoutButton,
  LogoutButtonMobile,
  PopupContainer,
  PopupButtons,
  CancelButton,
  ConfirmButton,
  PopupHeading,
} from './styledComponents'

const ProfileUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png'

const lightThemeLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const darkThemeLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

class Header extends Component {
  onClickLogout = () => {
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  renderMobilePopup = isDark => (
    <Popup
      modal
      trigger={
        <LogoutButtonMobile onClick={this.onClickLogout} isDark={isDark}>
          <FiLogOut color={isDark ? 'white' : 'black'} size={26} />
        </LogoutButtonMobile>
      }
      className="popup-content"
    >
      {close => (
        <PopupContainer isDark={isDark}>
          <PopupHeading as="p" isDark={isDark}>
            Are you sure, you want to logout
          </PopupHeading>
          <PopupButtons isDark={isDark} main>
            {/* <PopupButtons> */}
            <CancelButton isDark={isDark} onClick={() => close()} type="button">
              Cancel
            </CancelButton>
            {/* </PopupButtons> */}
            {/* <PopupButtons> */}
            <ConfirmButton
              type="button"
              onClick={this.onClickLogout}
              isDark={isDark}
            >
              Confirm
            </ConfirmButton>
            {/* </PopupButtons> */}
          </PopupButtons>
        </PopupContainer>
      )}
    </Popup>
  )

  renderLogoutPopup = isDark => (
    <Popup
      modal
      trigger={
        <LogoutButton logout isDark={isDark}>
          Logout
        </LogoutButton>
      }
      className="popup-content"
    >
      {close => (
        <PopupContainer isDark={isDark}>
          <PopupHeading as="p" isDark={isDark}>
            Are you sure, you want to logout
          </PopupHeading>
          <PopupButtons isDark={isDark} main>
            <CancelButton isDark={isDark} onClick={() => close()} type="button">
              Cancel
            </CancelButton>

            <ConfirmButton
              type="button"
              onClick={this.onClickLogout}
              isDark={isDark}
            >
              Confirm
            </ConfirmButton>
          </PopupButtons>
        </PopupContainer>
      )}
    </Popup>
  )

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark, onClickChangeTheme} = value
          const logoImage = isDark ? darkThemeLogo : lightThemeLogo
          return (
            <>
              <DesktopViewHeader isDark={isDark}>
                <Link to="/">
                  <LogoImage src={logoImage} alt="website logo" />
                </Link>
                <ItemsContainer as="li">
                  <IconsButton data-testid="theme" onClick={onClickChangeTheme}>
                    {isDark ? (
                      <FiSun color="white" size={28} />
                    ) : (
                      <FaMoon size={28} />
                    )}
                  </IconsButton>
                  <IconsButton>
                    <LogoImage
                      src={ProfileUrl}
                      alt="profile"
                      height={30}
                      width={30}
                    />
                  </IconsButton>
                  {this.renderLogoutPopup(isDark)}
                </ItemsContainer>
              </DesktopViewHeader>
              <MobileViewHeader isDark={isDark}>
                <Link to="/">
                  <LogoImage src={logoImage} alt="website logo" />
                </Link>
                <ItemsContainer>
                  <IconsButton data-testid="theme" onClick={onClickChangeTheme}>
                    {isDark ? (
                      <FiSun size={26} color="white" />
                    ) : (
                      <FaMoon size={26} />
                    )}
                  </IconsButton>
                  <IconsButton>
                    <GiHamburgerMenu
                      size={26}
                      color={isDark ? 'white' : 'black'}
                    />
                  </IconsButton>
                  {this.renderMobilePopup(isDark)}
                </ItemsContainer>
              </MobileViewHeader>
            </>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
