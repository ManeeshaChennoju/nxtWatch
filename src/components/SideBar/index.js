import {Link} from 'react-router-dom'
import {Component} from 'react'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'

import {
  SideBarMain,
  SideBarContainer,
  BarItemAndName,
  IconButton,
  IconName,
  ContactContainer,
  ContactHeading,
  SocialNetworks,
  Button,
  Image,
  SocialPara,
} from './styledComponents'

const sideBarItemsList = [
  {
    id: 'HOME',
    displayText: 'Home',
    iconName: <AiFillHome size={25} />,
  },
  {
    id: 'TRENDING',
    displayText: 'Trending',
    iconName: <AiFillFire size={25} />,
  },
  {
    id: 'GAMING',
    displayText: 'Gaming',
    iconName: <SiYoutubegaming size={25} />,
  },
  {
    id: 'SAVED_VIDEOS',
    displayText: 'Saved Videos',
    iconName: <CgPlayListAdd size={25} />,
  },
]

const facebookUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png'
const linkedInUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png'
const twitterUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png'

class SideBar extends Component {
  state = {activeSideBar: 'HOME'}

  render() {
    const {activeSideBar} = this.state
    return (
      <SideBarMain>
        <SideBarContainer>
          {sideBarItemsList.map(eachItem => {
            const iconComponent = eachItem.iconName
            return (
              <Link
                style={{textDecoration: 'none'}}
                to={`/${
                  eachItem.id === 'HOME' ? '' : eachItem.id.toLowerCase()
                }`}
              >
                <BarItemAndName
                  isActive={activeSideBar === eachItem.id}
                  key={eachItem.id}
                >
                  <IconButton isActive={activeSideBar === eachItem.id}>
                    {iconComponent}
                  </IconButton>
                  <IconName isActive={activeSideBar === eachItem.id}>
                    {eachItem.displayText}
                  </IconName>
                </BarItemAndName>
              </Link>
            )
          })}
        </SideBarContainer>
        <ContactContainer>
          <ContactHeading>CONTACT US</ContactHeading>
          <SocialNetworks>
            <Button type="button">
              <Image src={facebookUrl} alt="facebook logo" />
            </Button>
            <Button type="button">
              <Image src={linkedInUrl} alt="linked in logo" />
            </Button>
            <Button type="button">
              <Image src={twitterUrl} alt="twitter logo" />
            </Button>
          </SocialNetworks>
          <SocialPara>
            Enjoy! Now to see your channels and recommendations!
          </SocialPara>
        </ContactContainer>
      </SideBarMain>
    )
  }
}

export default SideBar