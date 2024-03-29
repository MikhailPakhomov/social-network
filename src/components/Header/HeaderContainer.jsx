import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserData } from "../../redux/auth-reducer"



class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.getAuthUserData();
    }
    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} />
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



export default connect(mapStateToProps, { getAuthUserData })(HeaderContainer);