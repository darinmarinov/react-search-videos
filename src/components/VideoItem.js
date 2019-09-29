import React from 'react';
import  './VideoItem.css';

class VideoItem extends React.Component{
    render(){
        const video = this.props.video;
        const onVideoSelect = this.props.onVideoSelect;
        return(
            <div onClick={() => onVideoSelect(video)} className="item">
                <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.thumbnails.medium.url}/>
                <div className="content"><p className="header">{video.snippet.title}</p></div>
            </div>
        )
    }
}

export default VideoItem;