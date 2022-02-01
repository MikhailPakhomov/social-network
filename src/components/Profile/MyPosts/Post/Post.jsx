import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return (
      <div class={s.item}>
        <img src="https://mr-mem.ru/images/memes/pidrila-ebanaya-kotik_1496479948.jpeg"></img>
        {props.message}
        <div>
          <span>like   {props.likeCount}</span>
          
        </div>
      </div>
    );
}

export default Post;
