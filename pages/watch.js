import axios from 'axios'
import NavBar from '@components/NavBar'
import HeadComponent from '@components/Head'
import Footer from '@components/Footer'
import VideoList from '@components/watch/VideoList'
import VideoPlayer from '@components/watch/VideoPlayer'

export const getStaticProps = async () => {
  const res = await axios.get('http://localhost:3000/api/ytviewcount')
  const data = res.data.items;
  return {
    props: {
      data: data
    }
  }
}

export default function Watch({data}) {
  console.log(data)
  return (
    <div>
      <HeadComponent />
      <NavBar />
      <VideoPlayer video={data[0]}/>
      <VideoList />
      <Footer />
    </div>
  )
}