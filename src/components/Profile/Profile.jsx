import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = (props) =>{
<<<<<<< HEAD
  console.log(props)
    return (
        <div>
          <ProfileInfo userInfo={props.userInfo}/>
=======

    return (
        <div>
          <ProfileInfo />
>>>>>>> b57745d5990a27a086641a7e87304cb2edd2b97d
          <MyPostsContainer />
        </div>
    );
}

export default Profile;
