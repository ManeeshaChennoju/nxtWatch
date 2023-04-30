import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
`
export const MainSideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

// content container
export const HomeContentContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
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
  padding: 5px;
`

export const ImgLogo = styled.img`
  width: 150px;
  height: 28px;
  margin-bottom: 10px;
  width: ${props => (props.failure ? '450px' : '')};
  height: ${props => (props.failure ? '400px' : '')};
`
export const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${props => (props.close ? 'none' : '')};
  background-color: ${props => (props.close ? 'transparent' : '')};
`

export const Para = styled.p`
  color: #262626;
  font-size: 16px;
  margin-bottom: 20px;
  text-align: ${props => (props.failurePara ? 'center' : '')};
`

export const CustomContainer = styled.div`
  display: ${props => (props.imgAndClose ? 'flex' : '')};
  align-items: ${props => (props.imgAndClose ? 'center' : '')};
  justify-content: ${props => (props.imgAndClose ? 'space-between' : '')};
  margin-right: ${props => (props.imgAndClose ? '20px' : '')};
`

export const RetryButton = styled.button`
  background-color: blue;
  padding: 10px 20px 10px 20px;
  color: white;
  font-size: bold;
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
  height: 40px;
  display: flex;
  width: 500px;
  margin-top: 20px;
  margin-bottom: 20px;
`
export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-weight: bold;
  font-size: 13px;
  padding: 5px;
`
export const SearchButton = styled.button`
  height: 39px;
  border: 1px solid #b3b3b3;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
`
// search input container

// videos container
export const VideosContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 0;
  overflow-y: scroll;
`
// videos container

// Failure view
export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  font-size: 28px;
  font-weight: bold;
`
// Failure view

// No results Found

export const NoResultsFoundContainer = styled(FailureContainer)``

// No results Found
