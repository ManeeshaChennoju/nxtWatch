import styled from 'styled-components'

export const SideBarMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  //   width: 20%;
  padding: 0;
  background-color: ${props => (props.isDark ? '#262626' : 'white')};
`

// Side Bar Container

export const SideBarContainer = styled.ul`
  width: 100%;
  display: flex;
  padding: 0;
  flex-direction: column;
  text-decoration: none;
  background-color: ${props => (props.isDark ? '#262626' : 'white')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const BarItemAndName = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  width: 250px;
  background-color: ${props => (props.isActive ? '#e6f3ff' : '#ffffff')};
  background-color: ${props => (props.isDark ? '#262626' : 'white')};
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
  color: ${props => (props.isDark ? 'white' : 'black')};
`
export const IconName = styled.p`
  color: black;
  text-decoration: none;
  margin-left: 10px;
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  color: ${props => (props.isDark ? 'white' : 'black')};
`

// contact Bar
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3px;
  color: ${props => (props.isDark ? 'white' : 'black')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ContactHeading = styled.p`
  color: black;
  font-size: 20px;
  font-weight: bold;
  color: ${props => (props.isDark ? 'white' : '#404040')};
`
export const SocialNetworks = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
`
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  margin-left: 0;
`
export const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 5px;
`
export const SocialPara = styled.p`
  color: ${props => (props.isDark ? 'white' : '#404040')};
  font-size: 15px;
  margin-bottom: 20px;
  font-weight: 500;
  width: 200px;
`
// contact Bar

// Side Bar Container
