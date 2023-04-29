import {FaMoon} from 'react-icons/fa'
import {CgProfile} from 'react-icons/cg'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FiLogOut} from 'react-icons/fi'
import {
  DesktopViewHeader,
  LogoImage,
  ItemsContainer,
  IconsButton,
  MobileViewHeader,
} from './styledComponents'

const lightThemeLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const darkThemeLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

const Header = () => (
  <>
    <DesktopViewHeader>
      <LogoImage src={lightThemeLogo} alt="website logo" />
      <ItemsContainer>
        <IconsButton data-testid="theme">
          <FaMoon size={28} />
        </IconsButton>
        <IconsButton>
          <CgProfile size={30} />
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
