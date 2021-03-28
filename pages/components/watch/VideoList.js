import Style from '@styles/VideoList.module.css'
import Card from 'react-bootstrap/Card'

const VideoList = () => (
  <>
  <div className={Style.videolistentry}>
    <div>
      <img src="https://i.ytimg.com/vi/YWhU7yRR4rM/default.jpg" alt="thumbnail" />
    </div>
    <div>
      <div className={Style.videolistentrytitle}>Itzy</div>
      <div className={Style.videolistentrydetail}>This is description example!</div>
    </div>
  </div>
  <Card style={{ width: '18rem' }} >
    <Card.Img variant="top" src="https://i.ytimg.com/vi/YWhU7yRR4rM/default.jpg" />
    <Card.Body>
      <Card.Title className={Style.videolistentrytitle}>Card Title</Card.Title>
      <Card.Text className={Style.videolistentrydetail}>
        Some quick example text to build on the card title and make up the bulk of
        the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  </>
);

export default VideoList