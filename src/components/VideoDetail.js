import React from 'react';
import './VideoDetail.css'

class VideoDetail extends React.Component{
    render() {
         
        const video = this.props.video;
        const ytubeUrl = 'https://www.youtube.com/embed/'

        if(!video){
            return <div className="lds-hourglass">Loading ...</div> 
        }

        return (
            <div className="ui segment video-detail"> 
                <h2 className="ui header">{video.snippet.title}</h2>
                <p className="ui content">{video.snippet.description}</p>
                 <div className="ui iframe">
                   <iframe width="420" height="315" title="Whatever"
                           src={ytubeUrl+video.id.videoId}>
                   </iframe>
                 </div>
            </div>
        )
    }
}

export default VideoDetail;