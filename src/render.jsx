import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {addNewPost, 
        updateInputNewPost, 
        sendMessage, 
        updateInputNewMessage} from './redux/state';

export let rerenderEntireTree = (state) =>{
    
    ReactDOM.render(
        <React.StrictMode>
          <App state={state} 
               addNewPost={addNewPost}
               updateInputNewPost={updateInputNewPost}
               sendMessage={sendMessage}
               updateInputNewMessage={updateInputNewMessage}/>
        </React.StrictMode>,
        document.getElementById('root')
      );
}
