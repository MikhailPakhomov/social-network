import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, getUsers, thunkUnfollow, thunkFollow  } from "../../redux/users-reduser";
import Users from "./Users";
import Preloader from "../../common/Preloader";
import { withAuthRedirect } from "../../hoc/AuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize )
}

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.thunkUnfollow}
                follow={this.props.thunkFollow}
                toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                isFollowingInProgress={this.props.isFollowingInProgress}
            />
        </>
    }

}

let mapStateToProps = (state) => {

    return {
        users: state.findUsers.users,
        pageSize: state.findUsers.pageSize,
        totalUsersCount: state.findUsers.totalUsersCount,
        currentPage: state.findUsers.currentPage,
        isFetching: state.findUsers.isFetching,
        isFollowingInProgress: state.findUsers.isFollowingInProgress,
    }
}

export default compose (
    connect(mapStateToProps, 
        { follow, unfollow, setCurrentPage, getUsers, thunkFollow, thunkUnfollow }),
        withAuthRedirect
)(UsersContainer)

