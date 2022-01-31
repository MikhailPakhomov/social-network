import React from 'react';
import s from "./Content.module.css";

const Content = () =>{
    return (
        <div className={s.content}>
        <div class={s.main_img}>
          <img src='https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg'></img>
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
    );
}

export default Content;
