import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {BiLike, BiDislike, BiListPlus} from 'react-icons/bi'
import Header from '../Header'
import SideBar from '../SideBar'
import SavedVideos from '../SavedVideos'
import ThemeContext from '../../context/ThemeContext'

import {
  VideoItemPage,
  VideoItemContainer,
  VideoContainer,
  CustomPara,
  CustomContainer,
  ViewsAndDays,
  Para,
  UserActionsContainer,
  IconButton,
  IconName,
  HorizontalLine,
  BottomContainer,
  Image,
  ContentContainer,
  Description,
  FailureViewContainer,
  ButtonContainer,
  RetryButton,
  Heading,
} from './styledComponents'

const lightHomeFailureUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
const darkHomeFailureUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

const VideoApiStatusViews = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    videoDetails: {},
    apiStatus: VideoApiStatusViews.initial,
    isActiveLike: false,
    isActiveDislike: false,
    isSaved: false,
    savedVideosList: [],
  }

  componentDidMount() {
    this.getVideoItem()
  }

  getVideoItem = async () => {
    this.setState({apiStatus: VideoApiStatusViews.in_progress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const video = data.video_details
      const updatedVideo = {
        id: video.id,
        title: video.title,
        videoUrl: video.video_url,
        thumbnailUrl: video.thumbnail_url,
        channel: video.channel,
        viewCount: video.view_count,
        publishedAt: video.published_at,
        description: video.description,
      }
      this.setState({
        videoDetails: updatedVideo,
        apiStatus: VideoApiStatusViews.success,
      })
    } else {
      this.setState({apiStatus: VideoApiStatusViews.failure})
    }
  }

  onClickToggleLike = () => {
    this.setState(prevState => ({isActiveLike: !prevState.isActiveLike}))
  }

  onClickToggleDislike = () => {
    this.setState(prevState => ({isActiveDislike: !prevState.isActiveDislike}))
  }

  onClickToggleSave = () => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
  }

  //   onClickSave = () => {
  //     const {isSaved, videoDetails, savedVideosList} = this.state
  //   }

  renderSuccessVideoItem = isDark => {
    const {videoDetails, isActiveLike, isActiveDislike, isSaved} = this.state
    const {
      id,
      title,
      channel,
      viewCount,
      publishedAt,
      videoUrl,
      description,
    } = videoDetails
    const updatedChannel = {
      name: channel.name,
      profileImageUrl: channel.profile_image_url,
      subscriberCount: channel.subscriber_count,
    }
    const {name, subscriberCount, profileImageUrl} = updatedChannel

    return (
      <>
        <VideoContainer>
          <ReactPlayer url={videoUrl} />
        </VideoContainer>
        <CustomPara isDark={isDark}> {title} </CustomPara>
        <CustomContainer>
          <ViewsAndDays>
            <Para isDark={isDark}>{viewCount} views</Para>
            <Para isDark={isDark}>. {publishedAt}</Para>
          </ViewsAndDays>
          <UserActionsContainer>
            <UserActionsContainer iconAndName>
              <IconButton onClick={this.onClickToggleLike}>
                <BiLike
                  color={isActiveLike ? '#2563eb' : '#64748b'}
                  size={20}
                  //   color={isDark ? 'white' : 'black'}
                />
              </IconButton>
              <IconName
                color={isActiveLike ? '#2563eb' : '#64748b'}
                isDark={isDark}
              >
                Like
              </IconName>
            </UserActionsContainer>
            <UserActionsContainer iconAndName>
              <IconButton onClick={this.onClickToggleDislike}>
                <BiDislike
                  size={20}
                  color={isActiveDislike ? '#2563eb' : '#64748b'}
                  //   color={isDark ? 'white' : 'black'}
                />
              </IconButton>
              <IconName
                color={isActiveDislike ? '#2563eb' : '#64748b'}
                isDark={isDark}
              >
                Dislike
              </IconName>
            </UserActionsContainer>
            <UserActionsContainer iconAndName>
              <IconButton onClick={this.onClickToggleSave}>
                <BiListPlus
                  size={20}
                  color={isSaved ? '#2563eb' : '#64748b'}
                  //   color={isDark ? 'white' : 'black'}
                />
              </IconButton>
              <IconName color={isSaved ? '#2563eb' : '#64748b'} isDark={isDark}>
                {isSaved ? 'Saved' : 'Save'}
              </IconName>
            </UserActionsContainer>
          </UserActionsContainer>
        </CustomContainer>
        <HorizontalLine />
        <BottomContainer>
          <Image src={profileImageUrl} alt="" />
          <ContentContainer>
            <CustomPara bottom="true" isDark={isDark}>
              {name}
            </CustomPara>
            <Para isDark={isDark}>{subscriberCount}</Para>
            <Description isDark={isDark}>{description}</Description>
          </ContentContainer>
        </BottomContainer>
      </>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  onClickRetry = () => {
    this.getVideoItem()
  }

  renderFailureView = isDark => (
    <FailureViewContainer isDark={isDark}>
      <Image
        src={isDark ? darkHomeFailureUrl : lightHomeFailureUrl}
        alt="failure view"
        failure="true"
      />
      <Heading isDark={isDark}>Oops! Something Went Wrong</Heading>
      <CustomPara isDark={isDark}>
        We are having some trouble complete your request.
      </CustomPara>
      <ButtonContainer>
        <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
      </ButtonContainer>
    </FailureViewContainer>
  )

  renderVideoItemViews = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case VideoApiStatusViews.in_progress:
        return this.renderLoadingView(isDark)
      case VideoApiStatusViews.success:
        return this.renderSuccessVideoItem(isDark)
      case VideoApiStatusViews.failure:
        return this.renderFailureView(isDark)
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        <ThemeContext.Consumer>
          {value => {
            const {isDark} = value
            return (
              <VideoItemPage>
                <SideBar />
                <VideoItemContainer isDark={isDark}>
                  {this.renderVideoItemViews(isDark)}
                </VideoItemContainer>
              </VideoItemPage>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}

export default VideoItemDetails
