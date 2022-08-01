import React from 'react';
import "./index.css";
import App from './App';
import store from './redux/redux-store';
import  ReactDOM  from 'react-dom';
import {Provider} from "react-redux";




ReactDOM.render(
  
    <Provider store={store}>
        <App />
    </Provider>
  ,
  document.getElementById('root')
);

<<<<<<< HEAD
window.store = store;
=======

>>>>>>> b57745d5990a27a086641a7e87304cb2edd2b97d



