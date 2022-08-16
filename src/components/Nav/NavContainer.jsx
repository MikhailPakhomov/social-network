import axios from 'axios';
import React from 'react';
import { connect } from "react-redux";
import Nav from './Nav';

let mapStateToProps = (state) => {

    // axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true})
    // .then((response) => {
    //     this.props.setAuthUserData(response.data.data);
    //     response.data.resultCode === 0 ? this.props.toggleIsAuth(true) : this.props.toggleIsAuth(false);
    // })
    
    return {
        friends: state.sidebar.friends,
        currentUserID: state.navbar.currentUserID
    }

}
const NavContainer = connect(mapStateToProps) (Nav);

export default NavContainer;