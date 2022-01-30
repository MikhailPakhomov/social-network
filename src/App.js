import React from 'react';
import logo from './logo.svg';
import './App.css';




const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src='https://seeklogo.com/images/C/company-name-logo-C74A7D6F5A-seeklogo.com.png'/>
      </header>
      <nav className='nav'>
        <div>
          <a>Profile</a>
        </div>
        <div>
          <a>Messages</a>
        </div>
        <div>
          <a>News</a>
        </div>
        <div>
          <a>Music</a>
        </div>
        <div>
          <a>Settings</a>
        </div>
      </nav>
      <div className='content'>
        <div>
          <img src='https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg'/>
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div>
            <div>
              post 1
            </div>
            <div>
              post 2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default App;

