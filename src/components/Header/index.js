import {Link} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {
  DesktopViewHeader,
  LogoImage,
  ItemsContainer,
  IconsButton,
  MobileViewHeader,
} from './styledComponents'

const ProfileUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png'

const lightThemeLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const darkThemeLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const Header = () => (
  <>
    <DesktopViewHeader>
      <Link to="/">
        <LogoImage src={lightThemeLogo} alt="website logo" />
      </Link>
      <ItemsContainer as="li">
        <IconsButton data-testid="theme">
          <FaMoon size={28} />
        </IconsButton>
        <IconsButton>
          <LogoImage src={ProfileUrl} alt="profile" profile />
        </IconsButton>
        <IconsButton logout>Logout</IconsButton>
      </ItemsContainer>
    </DesktopViewHeader>
    <MobileViewHeader>
      <LogoImage />
      <ItemsContainer>
        <IconsButton data-testid="theme">
          <FaMoon size={26} />
        </IconsButton>
        <IconsButton>
          <GiHamburgerMenu size={26} />
        </IconsButton>
        <IconsButton>
          <FiLogOut size={26} />
        </IconsButton>
      </ItemsContainer>
    </MobileViewHeader>
  </>
)

export default Header
