import VideoPlayer from "react-video-js-player";
import Movie from "./tenet.mp4"
import classes from "./Film.module.scss"
const VideoJs = (props) => {
    const videoSrc = Movie;
    const poster = "";
    return (
        <div className={classes.video} >
            <VideoPlayer src= {videoSrc} porster= {poster} width="720" height="480" />            
        </div>
    )
  }

  export default VideoJs;