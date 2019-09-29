import React from 'react';
import SearchBar from './SearchBar';
import VideosLIst from './VideoList';
import VideoDetail from './VideoDetail'

import youtube from '../apis/youtube'

const KEY = 'AIzaSyBuYV5kl6FgdQO6MDpATDX1BGWQrQi9Vds';


class App extends React.Component{
    
    state = {videos:[], selectedVideo:null}
     
    componentDidMount(){
        this.onFormSubmit('buildings')
    }

    onFormSubmit = async term =>{
   
        const response = await youtube.get('/search', {
              params:{
                  q: term,
                  part: "snippet",
                  maxResults: 3,
                  key: KEY
              }
          })
         this.setState({videos:response.data.items, selectedVideo:response.data.items[0]})
   
    };

    onVideoSelect = video => {
       return this.setState({selectedVideo : video})
    }
   
    render() {
        return(
            <div className="ui container">
               <SearchBar onFormSubmit={this.onFormSubmit}></SearchBar>
               
               <div className="ui grid">
                   <div className="ui row">
                       <div className="eleven wide column">
                         <VideoDetail video={this.state.selectedVideo}></VideoDetail>
                       </div>
                       <div className="five wide column">
                         <VideosLIst onVideoSelect={this.onVideoSelect} videos={this.state.videos}></VideosLIst>
                       </div>
                   </div>
               </div>
            </div>
        )
    }
}

export default App;