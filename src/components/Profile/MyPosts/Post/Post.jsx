import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {

  return (
    <div className={s.item}>
      <div className={s.ava}>
        <img src="https://www.meme-arsenal.com/memes/793c1bad8ad190d78f8fad1ada15df25.jpg"></img>
      </div>
      <div className={s.post}>
        <div className={s.name}>
          {props.name}
        </div>
        <div className={s.message}>
          {props.message}
        </div>
        <div className={s.like}>
          <span>like  {props.likeCount}</span>
        </div>
      </div>
    </div>
  );
}

export default Post;
