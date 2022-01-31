import React from 'react';
import './App.css';
import Content from './components/Content';
import Nav from './components/Nav';





const App = () => {
  return (
    <div className='app_wrapper'>
      <div className='content_wrapper'>
        <Nav />
        <Content />
      </div>
    </div>
  );
}



export default App;

