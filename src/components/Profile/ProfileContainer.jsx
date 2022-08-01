import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import {setUserInfo} from "../../redux/profile-reducer"
import Profile from "./Profile";


class ProfileContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
        .then((response) => {
            console.log(response.data)
            this.props.setUserInfo(response.data)
        });
    }
    render() {
        return (<Profile {...this.props} userInfo={this.props.userInfo}/>)
    }

}

let mapStateToProps = (state) => ({
    userInfo: state.profilePage.userInfo
})



export default connect(mapStateToProps,{setUserInfo}) (ProfileContainer);