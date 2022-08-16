import React from "react";
import { connect } from "react-redux";
import Preloader from "../../common/Preloader";
import { getUserProfile } from "../../redux/profile-reducer"
import Profile from "./Profile";
import { useParams, Navigate } from "react-router-dom";


const withRouter = WrappedComponent => props => {

    let params = useParams();
    return (
        <WrappedComponent
            {...props}
            params={params}
        />
    );
};

class ProfileContainer extends React.Component {
    userId;

    componentDidMount() {
        console.log(this.props)
        this.userId = this.props.params.userId;
        if (!this.userId) this.userId = 2; 
        this.props.getUserProfile(this.userId);
    }
    render() {
        if (!this.props.isAuth) return <Navigate to="/login" />;
        if (!this.props.userProfile) { return <Preloader /> }
        return (<Profile {...this.props} userProfile={this.props.userProfile} />);
    }
    componentDidUpdate() {
        if(this.userId != this.props.params.userId){
        this.userId = this.props.params.userId;
        this.props.getUserProfile(this.userId);
        }

    }

}
let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile,
    isAuth: state.auth.isAuth
})

let WithUrlDataContainetComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUserProfile })(WithUrlDataContainetComponent);