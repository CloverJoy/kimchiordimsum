import Style from '@styles/VideoPlayer.module.css'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

const VideoPlayer = () => (
  <div className={Style.videoplayer}>
    <ResponsiveEmbed aspectRatio="16by9">
      <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/q9qN1hiO4dc`} allowFullScreen></iframe>
    </ResponsiveEmbed>
    <div className={Style.videoplayerdetails}>
      <h3>Hello hello</h3>
    < div>description</div>
    </div>
  </div>
)

export default VideoPlayer