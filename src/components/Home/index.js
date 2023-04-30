import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import {HiSearch} from 'react-icons/hi'
import {RiCloseLine} from 'react-icons/ri'
import Header from '../Header'
import SideBar from '../SideBar'
import HomeVideoItem from '../HomeVideoItem'

import {
  HomeContainer,
  HomeContentContainer,
  PremiumContainer,
  ImgLogo,
  Para,
  GetItNowButton,
  InputContainer,
  Input,
  SearchButton,
  VideosContainer,
  CustomContainer,
  FailureContainer,
  RetryButton,
  Heading,
  CustomButton,
  NoResultsFoundContainer,
} from './styledComponents'

const lightHomeFailureUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
const darkHomeFailureUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
const lightThemeLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
const darkThemeLogo =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
const noResultsUrl =
  'https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png'

const homeApiStatusViews = {
  initial: 'INITIAL',
  in_progress: 'IN_PROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    apiStatus: homeApiStatusViews.initial,
    searchInput: '',
    videosList: [],
  }

  componentDidMount() {
    this.getHomeVideos()
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearch = () => {
    this.getHomeVideos()
  }

  getHomeVideos = async () => {
    this.setState({apiStatus: homeApiStatusViews.in_progress})
    const {searchInput} = this.state
    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
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
        videosList: updatedVideos,
        apiStatus: homeApiStatusViews.success,
      })
      console.log(updatedVideos)
    } else {
      this.setState({apiStatus: homeApiStatusViews.failure})
    }
  }

  renderHomeVideos = () => {
    const {videosList, searchInput} = this.state
    const filteredList = videosList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <>
        {filteredList.length === 0
          ? this.renderNoResultsFound()
          : filteredList.map(eachItem => (
              <HomeVideoItem key={eachItem.id} videoDetails={eachItem} />
            ))}
      </>
    )
  }

  renderLoadingView = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  )

  renderHomeFailureView = () => (
    <FailureContainer>
      <ImgLogo src={lightHomeFailureUrl} alt="failure view" failure />
      <Heading>Oops! Something Went Wrong</Heading>
      <Para failurePara>
        We are having some trouble complete your request.
        <br />
        Please try again.
      </Para>
      <CustomContainer retry>
        <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
      </CustomContainer>
    </FailureContainer>
  )

  renderNoResultsFound = () => (
    <NoResultsFoundContainer>
      <ImgLogo src={noResultsUrl} failure alt="no videos" />
      <Heading>No Search results found</Heading>
      <Para failurePara>Try different key words or remove search filter</Para>
      <CustomContainer retry>
        <RetryButton onClick={this.onClickRetry}>Retry</RetryButton>
      </CustomContainer>
    </NoResultsFoundContainer>
  )

  renderHomeVideoViews = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case homeApiStatusViews.in_progress:
        return this.renderLoadingView()
      case homeApiStatusViews.success:
        return this.renderHomeVideos()
      case homeApiStatusViews.failure:
        return this.renderHomeFailureView()
      default:
        return null
    }
  }

  onClickRetry = () => {
    this.getHomeVideos()
  }

  render() {
    const {searchInput} = this.state
    return (
      <>
        <Header />
        <HomeContainer data-testid="home">
          <SideBar />
          <HomeContentContainer>
            <PremiumContainer data-testid="banner">
              <CustomContainer imgAndClose>
                <ImgLogo src={lightThemeLogo} alt="nxt watch logo" />
                <CustomButton close data-testid="close">
                  <RiCloseLine size={25} />
                </CustomButton>
              </CustomContainer>
              <Para>
                Buy Nxt Watch Premium prepaid plans with <br /> UPI
              </Para>
              <CustomContainer>
                <GetItNowButton type="button">GET IT NOW</GetItNowButton>
              </CustomContainer>
            </PremiumContainer>
            <InputContainer>
              <Input
                type="search"
                placeholder="Search"
                value={searchInput}
                onChange={this.onChangeSearchInput}
              />
              <SearchButton
                data-testid="searchButton"
                type="button"
                onClick={this.onClickSearch}
              >
                <HiSearch size={20} />
              </SearchButton>
            </InputContainer>
            <VideosContainer>{this.renderHomeVideoViews()}</VideosContainer>
          </HomeContentContainer>
        </HomeContainer>
      </>
    )
  }
}

export default Home
