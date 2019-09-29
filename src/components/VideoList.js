import React from "react";
import VideoItem from "./VideoItem"

class VideoList extends React.Component {


    render() {
        const videos = this.props.videos;
        const onVideoSelect = this.props.onVideoSelect;

        const renderedList = videos.map( video => {
           return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
        });

        return (
            <div className="videos">
                {renderedList}
            </div>
        )
    }
}

export default VideoList;