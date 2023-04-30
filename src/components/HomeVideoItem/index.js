import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import {
  CustomContainer,
  Image,
  CustomPara,
  ViewCountAndDays,
} from './styledComponents'

const HomeVideoItem = props => {
  const {videoDetails} = props
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
  console.log(channel.profile_image_url)

  const formattedDays = formatDistanceToNow(new Date(publishedAt))
  const array = formattedDays.split(' ')
  const days = array.splice(1)
  const duration = `${days.join(' ')} ago`
  console.log(duration)
  const {name, profileImageUrl} = updatedChannel
  return (
    <Link to={`/videos/:${id}`}>
      <CustomContainer as="li" main key={id}>
        <Image src={thumbnailUrl} alt="video thumbnail" />
        <CustomContainer logoAndPara>
          <Image videoLogo src={profileImageUrl} alt="channel logo" />
          <CustomContainer content>
            <CustomPara title>{title}</CustomPara>
            <CustomPara name>{name}</CustomPara>
            <ViewCountAndDays>
              <CustomPara>{viewCount} views</CustomPara>
              <CustomPara>. {publishedAt}</CustomPara>
            </ViewCountAndDays>
          </CustomContainer>
        </CustomContainer>
      </CustomContainer>
    </Link>
  )
}

export default HomeVideoItem

// console.log(formatDistanceToNow(new Date(2021, 8, 20)))
