import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News'
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';


const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <div className='content_wrapper'>
          <Nav state={props.state.sidebar}/>
          <div className='content'>
            <Routes>
              <Route path="/profile" element={<Profile  state={props.state.profilePage} />}/>
              <Route path="/dialogs*" element={<Dialogs state={props.state.dialogsPage}/>} />
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/friends" element={<Friends />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;

