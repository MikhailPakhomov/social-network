import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../../common/Preloader';

const Profile = (props) =>{
    return (
        <div>
          <ProfileInfo userProfile={props.userProfile}/>
          <MyPostsContainer />
        </div>
    );

    }
export default Profile;
