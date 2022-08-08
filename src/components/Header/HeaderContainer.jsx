import React from "react";
import Header from "./Header";
import * as axios from 'axios';
import { connect } from "react-redux";
import { setAuthUserData, toggleIsAuth} from "../../redux/auth-reducer"
import {setCurrentUserID} from "../../redux/navbar-reducer"

class HeaderContainer extends React.Component {


    componentDidMount () {
        
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true})
        .then((response) => {
            if(response.data.resultCode === 0) {
                this.props.toggleIsAuth(true);
                this.props.setAuthUserData(response.data.data);
                this.props.setCurrentUserID(response.data.data.id)
            }else {
                this.props.toggleIsAuth(false);
                this.props.setCurrentUserID(2)
            }

             
        })
        }
    

    render(){
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>
    }
}

let mapStateToProps = (state) => {

    return {
         id: state.auth.id,
         email: state.auth.email,
         login: state.auth.login,
         isAuth: state.auth.isAuth
        }
}



export default connect(mapStateToProps, { setAuthUserData, toggleIsAuth, setCurrentUserID } ) (HeaderContainer);