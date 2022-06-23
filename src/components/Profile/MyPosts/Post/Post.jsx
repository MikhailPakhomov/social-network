import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {

  return (
    <div className={s.item}>
      <div className={s.ava}>
        <img src="http://risovach.ru/upload/2012/12/mem/pidrila-ebanaya_6711217_orig_.jpeg"></img>
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
