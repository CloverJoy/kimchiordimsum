import Style from '@styles/VideoPlayer.module.css'
import ResponsiveEmbed from 'react-bootstrap/ResponsiveEmbed'
import moment from 'moment'

const VideoPlayer = ({video}) => (
  <div className={Style.videoplayer}>
    <ResponsiveEmbed aspectRatio="16by9">
      <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`} allowFullScreen></iframe>
    </ResponsiveEmbed>
    <div className={Style.videoplayerdetails}>
      <h3 dangerouslySetInnerHTML={{__html: video.snippet.title}} />
      <div dangerouslySetInnerHTML={{__html: moment(video.snippet.publishedAt).format('[Uploaded: ]MMM Do YYYY, [at] h:mm a')}} />

      {
        video.snippet.description.split('\n').map((desc, idx) => (
          <div style={{marginTop:'1.5em'}}key={idx+"desc"}>{desc}</div>
        ))
      }
    </div>
  </div>
)

export default VideoPlayer