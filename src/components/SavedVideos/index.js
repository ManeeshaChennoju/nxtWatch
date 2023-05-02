import Header from '../Header'
import SideBar from '../SideBar'

const SavedVideos = props => {
  const {savedVideosList} = props
  console.log(savedVideosList, 'saved vidoes')
  return (
    <>
      <Header />
      <p>SavedVideos</p>
    </>
  )
}

export default SavedVideos
