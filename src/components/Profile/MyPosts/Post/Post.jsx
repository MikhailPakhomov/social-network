import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {

  return (
    <div className={s.item}>
      <div className={s.ava}>
        <img src="https://mr-mem.ru/images/memes/pidrila-ebanaya-kotik_1496479948.jpeg"></img>
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
