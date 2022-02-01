import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';





const App = () => {
  return (
    <div className='app_wrapper'>
      <div className='content_wrapper'>
        <Nav />
        <Profile />
      </div>
    </div>
  );
}



export default App;

