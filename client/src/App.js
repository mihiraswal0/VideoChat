import React from 'react';
// import { Typography, AppBar } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import { useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
// import Sidebar from './components/Sidebar';
import Notifications from './components/Notification';


const App = () => {
  //  const [classes,setclass] = useState(useStyles)

  return (
    <div >
      <div><h1 className='wrapper appBar'>Video Chat</h1></div>
      <VideoPlayer />
      
    </div>
  );
};

export default App;