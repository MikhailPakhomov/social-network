import React from 'react';
import { connect } from "react-redux";
import Nav from './Nav';

let mapStateToProps = (state) =>{
    return{
        friends: state.sidebar.friends,
        currentUserID: state.navbar.currentUserID
    }
}

const NavContainer = connect(mapStateToProps) (Nav);

export default NavContainer;