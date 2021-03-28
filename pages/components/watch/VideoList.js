import Style from '@styles/VideoList.module.css'

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
  <div className={Style.videolistentry}>
    <div>
      <img className={Style.media} src="https://i.ytimg.com/vi/YWhU7yRR4rM/default.jpg" alt="" />
    </div>
    <div>
      <div className={Style.videolistentrytitle}>Itzy</div>
      <div className={Style.videolistentrydetail}>This is description example!</div>
    </div>
  </div>
  </>
);

export default VideoList