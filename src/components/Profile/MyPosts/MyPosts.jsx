import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={s.postBlock}>
          <div className={s.myPosts}>
            My posts
          </div>
            <textarea></textarea>
            <div>
              <button>Add post</button>
            </div>
          <div class={s.posts}>
            <Post message="Hi, how are you?" likeCount={20}/>
            <Post message="It`s my first post"/>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </div>
    );
}

export default MyPosts;
