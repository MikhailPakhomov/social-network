import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
//import Profile from './components/Profile/Profile';
import News from './components/News/News'
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavContainer from './components/Nav/NavContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';


const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
      <Header />
        <div className='content_wrapper'>
        <NavContainer />
          <div className='content'>
            <Routes>
              <Route path="/profile/:userId" element={<ProfileContainer />}/>
              <Route path="/profile/*" element={<ProfileContainer />} />
              <Route path="/dialogs" element={<DialogsContainer />}/>
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/users" element={<UsersContainer />} />
            </Routes>
          </div>
          
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}



export default App;

