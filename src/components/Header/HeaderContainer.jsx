import React from "react";
import Header from "./Header";
import * as axios from 'axios';
import { connect } from "react-redux";
import { setAuthUserData, toggleIsAuth} from "../../redux/auth-reducer"


class HeaderContainer extends React.Component {


    componentDidMount () {
        
        axios.get("https://social-network.samuraijs.com/api/1.0/auth/me", {withCredentials: true})
        .then((response) => {
            this.props.setAuthUserData(response.data.data);
            response.data.resultCode === 0 ? this.props.toggleIsAuth(true) : this.props.toggleIsAuth(false);
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



export default connect(mapStateToProps, { setAuthUserData, toggleIsAuth } ) (HeaderContainer);