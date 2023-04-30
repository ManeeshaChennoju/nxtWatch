import styled from 'styled-components'

export const DesktopViewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
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
  border: ${props => (props.logout ? '2px solid blue' : 'none')};
  width: ${props => (props.logout ? '100px' : '50px')};
  height: ${props => (props.logout ? '30px' : '50px')};
  background-color: transparent;
  border-radius: ${props => (props.logout ? '8px' : '')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  margin-right: 5px;
  color: ${props => (props.logout ? 'blue' : '')};
  @media screen and (max-width: 767px) {
    display: ${props => (props.logout ? 'none' : 'flex')};
  }
`

export const MobileViewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  @media screen and (min-width: 767px) {
    display: none;
  }
`
