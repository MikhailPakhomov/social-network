import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News'
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';



const App = () => {
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <div className='content_wrapper'>
          <Nav />
          <div className='content'>
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/dialogs*" element={<Dialogs />} />
              <Route path="/News" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}



export default App;

