import {Link} from 'react-router-dom'
import {Component} from 'react'
import {AiFillHome, AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import ThemeContext from '../../context/ThemeContext'

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
  SocialLi,
} from './styledComponents'

const sideBarItemsList = [
  {
    id: 'HOME',
    path: '/',
    displayText: 'Home',
    iconName: <AiFillHome size={25} />,
  },
  {
    id: 'TRENDING',
    path: 'trending',
    displayText: 'Trending',
    iconName: <AiFillFire size={25} />,
  },
  {
    id: 'GAMING',
    path: 'gaming',
    displayText: 'Gaming',
    iconName: <SiYoutubegaming size={25} />,
  },
  {
    id: 'SAVED_VIDEOS',
    path: 'saved-videos',
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
  state = {activeSideBar: sideBarItemsList[0].id}

  onClickSideBarItem = event => {
    this.setState({activeSideBar: event.target.id})
  }

  render() {
    const {activeSideBar} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDark} = value
          return (
            <SideBarMain isDark={isDark}>
              <SideBarContainer isDark={isDark}>
                {sideBarItemsList.map(eachItem => {
                  const iconComponent = eachItem.iconName
                  return (
                    <Link
                      id={eachItem.id}
                      style={{textDecoration: 'none'}}
                      to={eachItem.path}
                    >
                      <BarItemAndName
                        key={eachItem.id}
                        id={eachItem.id}
                        isDark={isDark}
                        isActive={activeSideBar === eachItem.id}
                        // onClick={this.onClickSideBarItem}
                      >
                        <IconButton
                          onClick={this.onClickSideBarItem}
                          isDark={isDark}
                          id={eachItem.id}
                          style={{
                            color: `${
                              activeSideBar === eachItem.id
                                ? 'red'
                                : `${isDark ? 'white' : 'black'}`
                            }`,
                          }}
                          isActive={activeSideBar === eachItem.id}
                        >
                          {iconComponent}
                        </IconButton>
                        <IconName
                          onClick={this.onClickSideBarItem}
                          isDark={isDark}
                          id={eachItem.id}
                          isActive={activeSideBar === eachItem.id}
                          fontWeight={
                            activeSideBar === eachItem.id ? 'bold' : 'normal'
                          }
                        >
                          {eachItem.displayText}
                        </IconName>
                      </BarItemAndName>
                    </Link>
                  )
                })}
              </SideBarContainer>
              <ContactContainer isDark={isDark}>
                <ContactHeading isDark={isDark}>CONTACT US</ContactHeading>
                <SocialNetworks>
                  <SocialLi key="1">
                    <Button type="button">
                      <Image src={facebookUrl} alt="facebook logo" />
                    </Button>
                  </SocialLi>
                  <SocialLi key="2">
                    <Button type="button">
                      <Image src={linkedInUrl} alt="linked in logo" />
                    </Button>
                  </SocialLi>
                  <SocialLi key="3">
                    <Button type="button">
                      <Image src={twitterUrl} alt="twitter logo" />
                    </Button>
                  </SocialLi>
                </SocialNetworks>
                <SocialPara isDark={isDark}>
                  Enjoy! Now to see your channels and recommendations!
                </SocialPara>
              </ContactContainer>
            </SideBarMain>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SideBar
