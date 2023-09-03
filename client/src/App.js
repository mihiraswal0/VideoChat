import React from 'react'
import {BrowserRouter ,Route} from 'react-router-dom';
import Homepage from './pages/Homepage';
import Chatpage from './pages/Chatpage';
const App = () => {
  return (
    <div className='App'>
    <BrowserRouter>
      <Route path='/' component={Homepage} exact/>
      <Route path='/chats' component={Chatpage}/>
    </BrowserRouter>
    </div>
  )
}

export default App