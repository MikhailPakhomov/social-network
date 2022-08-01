import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) =>{
  console.log(props)
    return (
        <div>
          <ProfileInfo userInfo={props.userInfo}/>
          <MyPostsContainer />
        </div>
    );
}

export default Profile;
