import React from 'react';
import {
  addNewPostActionCreator,
  updateInputNewPostActionCreator
} from '../../../redux/profile-reducer';
import { connect } from "react-redux";
import MyPosts from './MyPosts';


let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onAddPost: () => {
      dispatch(addNewPostActionCreator());
    },
    onPostChange: (text) => {
      dispatch(updateInputNewPostActionCreator(text))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
