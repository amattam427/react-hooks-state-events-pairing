import React from 'react'
import video from "../data/video.js";
import Header  from './Header.js';
import Buttons from './Buttons.js';


function App() {
  //console.log("Here's your data:", video);
  console.log(video.comments)


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <Header title = {video.title} views = {video.views} created = {video.createdAt}/>
     
      <Buttons video={video} />
    </div>
  );
}

export default App;
