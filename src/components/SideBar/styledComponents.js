import styled from 'styled-components'

export const SideBarMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 25%;
`

// Side Bar Container

export const SideBarContainer = styled.ul`
  width: 100%;
  display: flex;
  padding: 0;
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
  width: 250px;
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
  margin-left: 3px;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ContactHeading = styled.p`
  color: black;
  font-size: 20px;
  font-weight: bold;
  color: #404040;
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
  color: #262626;
  font-size: 15px;
  margin-bottom: 20px;
  font-weight: 500;
  width: 200px;
`
// contact Bar

// Side Bar Container
