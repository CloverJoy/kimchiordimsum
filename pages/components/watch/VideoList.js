import Style from '@styles/VideoList.module.css'
import Card from 'react-bootstrap/Card'

const VideoList = ({video, i, handleVideo}) => (
  <Card style={{ width: '18rem', marginBottom: '1em'}} >
    <Card.Img onClick={() => handleVideo(i)} className={Style.videolistentrytitle} variant="top" src={video.snippet.thumbnails.medium.url} />
    <Card.Body>
      <Card.Title onClick={() => handleVideo(i)} className={Style.videolistentrytitle} dangerouslySetInnerHTML={{__html: video.snippet.title}} />
      <Card.Text className={Style.videolistentrydetail} dangerouslySetInnerHTML={{__html: video.snippet.publishedAt}} />
    </Card.Body>
  </Card>
);

export default VideoList