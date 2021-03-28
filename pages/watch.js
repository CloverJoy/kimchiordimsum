import NavBar from '@components/NavBar'
import HeadComponent from '@components/Head'
import Footer from '@components/Footer'
import VideoList from '@components/watch/VideoList'
import VideoPlayer from '@components/watch/VideoPlayer'

export default function Watch() {
  return (
    <div>
      <HeadComponent />
      <NavBar />
      <VideoPlayer />
      <VideoList />
      <Footer />
    </div>
  )
}