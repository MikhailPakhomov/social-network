import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import News from './components/News/News'
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavContainer from './components/Nav/NavContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Footer from './components/Footer/Footer';
import LoginPage from './components/Login/Login';


const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
        <HeaderContainer />
        <div className='content_wrapper'>
        <NavContainer />
          <div className='content'>
            <Routes>
              <Route path="/profile/:userId" element={<ProfileContainer />}/>
              <Route path="/profile" element={<ProfileContainer />} />
              <Route path="/dialogs" element={<DialogsContainer />}/>
              <Route path="/news" element={<News />} />
              <Route path="/music" element={<Music />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </div>
          
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}



export default App;

