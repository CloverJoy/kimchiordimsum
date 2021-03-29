import Style from '@styles/VideoList.module.css'
import Card from 'react-bootstrap/Card'
import moment from 'moment'

const VideoList = ({video, i, handleVideo}) => (
  <Card style={{ width: '18rem', marginBottom: '1em'}} >
    <Card.Img onClick={() => handleVideo(i)} className={Style.videolistentrytitle} variant="top" src={video.snippet.thumbnails.medium.url||'asd'} />
    <Card.Body>
      <Card.Title onClick={() => handleVideo(i)} className={Style.videolistentrytitle} dangerouslySetInnerHTML={{__html: video.snippet.title||'title'}} />
      <Card.Text className={Style.videolistentrydetail} dangerouslySetInnerHTML={{__html: moment(video.snippet.publishedAt).format('[Uploaded: ]MMM Do YYYY, [at] h:mm a')||'12am'}} />
    </Card.Body>
  </Card>
);

export default VideoList