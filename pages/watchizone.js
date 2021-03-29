import axios from 'axios'
import {useState} from 'react'
import NavBar from './components/NavBar'
import HeadComponent from './components/HeadComponent'
import Footer from './components/Footer'
import VideoList from './components/watch/VideoList'
import VideoPlayer from './components/watch/VideoPlayer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export const getStaticProps = async () => {
  const res = await axios.get(`${process.env.URL||'http://localhost:3000'}/api/watchizone`)
  const data = res.data.items;
  console.log('YT called')
  return {
    props: {
      datas: data
    }
  }
}

export default function Watch({datas}) {
  const [video, setVideo] = useState(datas[0])
  const handleVideo = (idx) => {
    setVideo(datas[idx])
  }
  return (
    <div>
      <HeadComponent />
      <NavBar />
      <div style={{display: 'flex'}}>
      <VideoPlayer video={video}/>
      <Container style={{height:'100rem', width:'100%', overflow:'auto', marginTop: '1em', marginLeft:'3em'}}>
        <Row>
      {
        datas.map((data, idx) => (
          <Col sm key={data.id}>
          <VideoList handleVideo={handleVideo} i={idx} video={data} />
          </Col>
        ))
      }
        </Row>
      </Container>
      </div>
      <Footer />
    </div>
  )
}