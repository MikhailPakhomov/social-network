import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';




const MyPosts = (props) => {



  const postsElements = props.profilePage.posts.map( (p) => <Post key={p.id} name={p.name} message={p.message} likeCount={p.likeCount}/> );

  let newPostText = props.profilePage.newPostText;

  let onAddPost = () => {
    props.onAddPost();
  }

  let onPostChange = (e) => {
    let text = e.target.value;
    props.onPostChange(text);
    
  }

  
    return (
        <div className={s.postBlock}>
          <div className={s.myPosts}>
            My posts
          </div>
          <div className={s.inputTextPost}>
            <textarea onChange={onPostChange}  
                      value={newPostText} />           
          </div>
            
            <div>
              <button onClick={onAddPost}>Add post</button>
            </div>
          <div className={s.posts}>
              {postsElements}
          </div>
        </div>
    );
}

export default MyPosts;
