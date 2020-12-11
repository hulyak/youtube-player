import React, {useState, useEffect} from 'react';
import SearchBar from './components/SearchBar';
import VideoDetail from './components/VideoDetail';
import VideoList from './components/VideoList';
import youtube from './config'

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onTermSubmit = async(term) => {
    const response = await youtube.get("/search", {
      params : { q: term}
    })
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);
  }

  useEffect(() => {
    onTermSubmit('react hooks');
  }, []);

  return (
    <div className="ui container">
      <SearchBar onFormSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList videos={videos} onVideoSelect={(video) => setSelectedVideo(video)} />
           </div>
        </div>
      </div>
    </div>
  );
}

export default App;
