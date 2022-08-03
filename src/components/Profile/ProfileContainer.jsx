import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import Preloader from "../../common/Preloader";
import { setUserProfile } from "../../redux/profile-reducer"
import Profile from "./Profile";
import { useParams, useLocation, useNavigate } from "react-router-dom";

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
        if (!this.userId) {
            this.userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.userId}`)
            .then((response) => {
                this.props.setUserProfile(response.data);
            });
    }
    render() {
        if (!this.props.userProfile) { return <Preloader /> }
        return (<Profile {...this.props} userProfile={this.props.userProfile} />);
    }
    componentDidUpdate() {
        console.log(this.props)
        if(this.userId != this.props.params.userId){
        this.userId = this.props.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.userId}`)
            .then((response) => {
                this.props.setUserProfile(response.data);
            });
        }

    }

}
let mapStateToProps = (state) => ({
    userProfile: state.profilePage.userProfile
})

let WithUrlDataContainetComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(WithUrlDataContainetComponent);