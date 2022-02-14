import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';




const MyPosts = (props) => {

  const postsElements = props.posts.map( (p) => <Post name={p.name} message={p.message} likeCount={p.likeCount}/> );

  let newPostElement = React.createRef();

  let addNewPost = () => {
    let text = newPostElement.current.value;
    alert(text)
  };

    return (
        <div className={s.postBlock}>
          <div className={s.myPosts}>
            My posts
          </div>
            <textarea ref={newPostElement}></textarea>
            <div>
              <button onClick={addNewPost}>Add post</button>
            </div>
          <div class={s.posts}>
              {postsElements}
          </div>
        </div>
    );
}

export default MyPosts;
