import styled from 'styled-components'

export const VideoItemPage = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`
export const VideoItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 15px;
  width: 100%;
  min-height: 90vh;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const VideoContainer = styled.div`
  width: 100%;
`

export const CustomPara = styled.p`
  color: ${props => (props.isDark ? '#e6e6e6' : '#000000')};
  font-size: 18px;
  font-weight: bold;
  margin-bottom: ${props => (props.bottom ? 0 : '')};
`
export const CustomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ViewsAndDays = styled.div`
  display: flex;
  align-items: center;
`
export const Para = styled.p`
  font-size: 15px;
  color: ${props => (props.isDark ? '#595959' : '#666666')};
`

export const UserActionsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: ${props => (props.iconAndName ? '10px' : '')};
`
export const IconButton = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const IconName = styled.p`
  color: ${props => (props.isDark ? '#e6e6e6' : '#000000')};
  font-size: 14px;
  font-weight: 800;
`

export const HorizontalLine = styled.hr`
  width: 100%;
  color: #a6a6a6;
`

// bottom container

export const BottomContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

export const Image = styled.img`
  height: 50px;
  margin-right: 10px;
  margin-top: 20px;
  width: ${props => (props.failure ? '360px' : '50px')};
`

export const ContentContainer = styled(BottomContainer)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 0;
`
export const Description = styled.p`
  color: ${props => (props.isDark ? '#e6e6e6' : '#000000')};
  font-size: 14px;
  font-weight: 800;
  margin-top: 15px;
  margin-bottom: 10px;
`

export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => (props.isDark ? '#000000' : '#ffffff')};
`

export const ButtonContainer = styled.div``

export const RetryButton = styled.button`
  background-color: #1a8cff;
  padding: 8px 10px 8px 10px;
  border-radius: 5px;
  color: white;
  font-weight: bold;
`

export const Heading = styled.h1`
  color: ${props => (props.isDark ? '#e6e6e6' : '#000000')};
  font-size: ${props => (props.failure ? '26px' : '')};
  font-weight: bold;
`
