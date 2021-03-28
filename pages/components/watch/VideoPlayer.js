import Style from '@styles/VideoPlayer.module.css'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'

const VideoPlayer = ({video}) => (
  <div className={Style.videoplayer}>
    <ResponsiveEmbed aspectRatio="16by9">
      <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.id.videoId}`} allowFullScreen></iframe>
    </ResponsiveEmbed>
    <div className={Style.videoplayerdetails}>
      <h3 dangerouslySetInnerHTML={{__html: video.snippet.title}} />
      <div dangerouslySetInnerHTML={{__html:video.snippet.description}} />
    </div>
  </div>
)

export default VideoPlayer