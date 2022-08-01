import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
<<<<<<< HEAD
//import Profile from './components/Profile/Profile';
=======
import Profile from './components/Profile/Profile';
>>>>>>> b57745d5990a27a086641a7e87304cb2edd2b97d
import News from './components/News/News'
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavContainer from './components/Nav/NavContainer';
import UsersContainer from './components/Users/UsersContainer';
<<<<<<< HEAD
import ProfileContainer from './components/Profile/ProfileContainer';
=======
>>>>>>> b57745d5990a27a086641a7e87304cb2edd2b97d


const App = (props) => {
  
  return (
    <BrowserRouter>
      <div className='app_wrapper'>
      <Header />
        <div className='content_wrapper'>
        <NavContainer />
          <div className='content'>
            <Routes>
<<<<<<< HEAD
              <Route path="/profile/*" element={<ProfileContainer />}/>
              <Route path="/dialogs" element={<DialogsContainer />}/>
=======
<<<<<<<< HEAD:src/App.js
              <Route path="/profile" element={<Profile  state={props.state.profilePage} addPost={props.addPost}/>}/>
              <Route path="/dialogs*" element={<Dialogs state={props.state.dialogsPage}/>} />
========
              <Route path="/profile" element={<Profile />}/>
              <Route path="/dialogs" element={<DialogsContainer />}/>
>>>>>>>> b57745d5990a27a086641a7e87304cb2edd2b97d:src/App.jsx
>>>>>>> b57745d5990a27a086641a7e87304cb2edd2b97d
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

