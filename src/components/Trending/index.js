import {Component} from 'react'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {HiFire} from 'react-icons/hi'
import Header from '../Header'
import SideBar from '../SideBar'
import ThemeContext from '../../context/ThemeContext'

import {
  TrendingPage,
  TrendingContainer,
  CustomContainer,
  IconButton,
  Heading,
  VideoItemsUl,
  VideoItemLi,
  Image,
  CardParaContainer,
  SmallPara,
  ViewsAndDays,
  Para,
  FailureViewContainer,
  RetryButton,
} from './styledComponents'

const lightHomeFailureUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
const darkHomeFailureUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'

const TrendingApiStatusViews = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {trendingList: [], apiStatus: TrendingApiStatusViews.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: TrendingApiStatusViews.in_progress})
    const jwtToken = Cookies.get('jwt_token')
    const tredingUrl = `https://apis.ccbp.in/videos/trending`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(tredingUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      const {videos} = data
      const updatedVideos = videos.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        thumbnailUrl: eachItem.thumbnail_url,
        channel: eachItem.channel,
        viewCount: eachItem.view_count,
        publishedAt: eachItem.published_at,
      }))
      this.setState({
        trendingList: updatedVideos,
        apiStatus: TrendingApiStatusViews.success,
      })
    } else {
      this.setState({apiStatus: TrendingApiStatusViews.failure})
    }
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderVideoItem = (videoDetails, isDark) => {
    const {
      id,
      title,
      thumbnailUrl,
      channel,
      viewCount,
      publishedAt,
    } = videoDetails
    const updatedChannel = {
      name: channel.name,
      profileImageUrl: channel.profile_image_url,
    }
    const {name} = updatedChannel
    const formattedDays = formatDistanceToNow(new Date(publishedAt))
    const array = formattedDays.split(' ')
    // const days = array.splice(1)
    // const duration = `${days.join(' ')} ago`
    const distance = array.join(' ')
    return (
      <Link to={`/videos/:${id}`} style={{textDecoration: 'none'}}>
        <VideoItemLi key={id}>
          <Image src={thumbnailUrl} alt="video thumbnail" />
          <CardParaContainer>
            <SmallPara title isDark={isDark}>
              {title}
            </SmallPara>
            <Para isDark={isDark}>{name}</Para>
            <ViewsAndDays>
              <Para isDark={isDark}>{viewCount} views</Para>
              <Para isDark={isDark}>. {publishedAt}</Para>
            </ViewsAndDays>
          </CardParaContainer>
        </VideoItemLi>
      </Link>
    )
  }

  renderTrendingSuccessView = isDark => {
    const {trendingList} = this.state
    return trendingList.map(eachItem => this.renderVideoItem(eachItem, isDark))
  }

  onClickRetry = () => {
    this.getTrendingVideos()
  }

  renderFailureView = isDark => (
    <FailureViewContainer isDark={isDark}>
      <Image
        src={isDark ? darkHomeFailureUrl : lightHomeFailureUrl}
        alt="failure view"
        failure
      />
      <Heading isDark={isDark} failure>
        Oops! Something Went Wrong
      </Heading>
      <SmallPara isDark={isDark}>
        We are having some trouble complete your request.
      </SmallPara>
      <CustomContainer failure>
        <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
      </CustomContainer>
    </FailureViewContainer>
  )

  renderTrendingViews = isDark => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case TrendingApiStatusViews.in_progress:
        return this.renderLoadingView(isDark)
      case TrendingApiStatusViews.success:
        return this.renderTrendingSuccessView(isDark)
      case TrendingApiStatusViews.failure:
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
              <TrendingPage>
                <SideBar />
                <TrendingContainer data-testid="trending" isDark={isDark}>
                  <CustomContainer isDark={isDark}>
                    <IconButton isDark={isDark} type="button">
                      <HiFire size={25} color="red" />
                    </IconButton>
                    <Heading isDark={isDark}>Trending</Heading>
                  </CustomContainer>
                  <VideoItemsUl>
                    {this.renderTrendingViews(isDark)}
                  </VideoItemsUl>
                </TrendingContainer>
              </TrendingPage>
            )
          }}
        </ThemeContext.Consumer>
      </>
    )
  }
}

export default VideoItemDetails
