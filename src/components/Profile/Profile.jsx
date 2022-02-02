import React from 'react';
import s from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';

const Profile = () =>{
    return (
        <div>
        <div class={s.main_img}>
          <div>
            <img src='https://cs7.pikabu.ru/post_img/big/2017/12/14/6/151324248417431745.jpg'/>
          </div>
        </div>
        <div>
          ava + description
        </div>
          <MyPosts />
        </div>
    );
}

export default Profile;
