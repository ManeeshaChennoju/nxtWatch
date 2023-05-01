import styled from 'styled-components'

export const DesktopViewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${props => (props.isDark ? '#262626' : 'white')};
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const LogoImage = styled.img`
  //   width: 170px;
  //   height: 30px;
  width: ${props => (props.profile ? '30px' : '170px')};
  height: ${props => (props.profile ? '30px' : '30px')};
  @media screen and (max-width: 767px) {
    width: 140px;
    height: 25px;
  }
`
export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
`
export const IconsButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-right: 5px;
`

export const LogoutButton = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 8px;
  border: ${props => (props.isDark ? '2px solid white' : '2px solid blue')};
  color: ${props => (props.isDark ? 'white' : 'blue')};
  background-color: transparent;
  font-weight: bold;
  @media screen and (max-width: 767px) {
    display: ${props => (props.logout ? 'none' : 'flex')};
  }
`
export const LogoutButtonMobile = styled.button`
  border: none;
  background-color: transparent;
`

export const MobileViewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: ${props => (props.isDark ? 'black' : 'white')};
  @media screen and (min-width: 767px) {
    display: none;
  }
`

// pop up

export const PopupContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //   width: 400px;
  //   height: 300px;
  width: 100%;
  border-radius: 5px;
  background-color: ${props => (props.isDark ? '#260d0d' : 'white')};
`
export const PopupButtons = styled.div`
  display: ${props => (props.main ? 'flex' : '')};
  align-items: ${props => (props.main ? 'center' : '')};
  justify-content: ${props => (props.main ? 'center' : '')};
  margin-right: 20px;
  width: 100%;
  @media screen and (max-width: 767px) {
    margin-right: 10px;
  }
`

export const PopupHeading = styled.h1`
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`

export const CancelButton = styled.button`
  border: ${props => (props.isDark ? '1px solid white' : '1px solid black')};
  background-color: transparent;
  border-radius: 5px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-weight: bold;
  padding: 10px 20px 10px 20px;
  margin-left: 10px;
  @media screen and (max-width: 767px) {
    padding: 5px 10px 5px 10px;
  }
`

export const ConfirmButton = styled.button`
  border: none;
  background-color: #4da6ff;
  border-radius: 5px;
  color: ${props => (props.isDark ? '#ffffff' : '#000000')};
  font-weight: bold;
  padding: 10px 20px 10px 20px;
  @media screen and (max-width: 767px) {
    padding: 5px 10px 5px 10px;
  }
`
