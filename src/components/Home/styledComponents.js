import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
export const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

// Side Bar Container

export const SideBarContainer = styled.ul`
  width: 40%;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const BarItemAndName = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  background-color: ${props => (props.isActive ? '#e6f3ff' : '#ffffff')};
`
export const IconButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: ${props => (props.isActive ? 'red' : 'black')};
`
export const IconName = styled.p`
  color: black;
  text-decoration: none;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`

// contact Bar
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContactHeading = styled.h1`
  color: black;
  font-size: 28px;
  font-weight: bold;
`
export const SocialNetworks = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
`
export const Image = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 5px;
`
export const SocialPara = styled.p`
  color: #262626;
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 500;
  width: 200px;
`
// contact Bar

// Side Bar Container

// content container
export const HomeContentContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
// content container

// advertise container

export const PremiumContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`

export const ImgLogo = styled.img`
  width: 150px;
  height: 28px;
  margin-bottom: 10px;
`
export const Para = styled.p`
  color: #262626;
  font-size: 16px;
  margin-bottom: 20px;
`
export const GetItNowButton = styled.button`
  border: 1px solid #262626;
  padding: 10px 20px 10px 20px;
  color: #262626;
  font-size: 17px;
  border-radius: 1px;
`

// advertise container

// search input container
export const InputContainer = styled.div`
  border: 1px solid #b3b3b3;
  height: 50px;
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const Input = styled.input`
  border: none;
  outline: none;
`
export const SearchButton = styled.button`
  height: 50px;
  border: 1px solid #b3b3b3;
  display: flex;
  justify-content: center;
  align-items: center;
`
// search input container

// videos container
export const VideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
// videos container
