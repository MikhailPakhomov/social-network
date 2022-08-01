import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching } from "../../redux/users-reduser";
import UsersAPIComponent from "./UsersAPIComponent";

let mapStateToProps = (state) => {

    return {
        users: state.findUsers.users,
        pageSize: state.findUsers.pageSize,
        totalUsersCount: state.findUsers.totalUsersCount,
        currentPage: state.findUsers.currentPage,
        isFetching: state.findUsers.isFetching
    }
}

// let mapDispatchToProps = ( dispatch ) => {
//     return {
//         follow: ( userId ) => {
//             dispatch( followAC ( userId ) );
//         },
//         unfollow: ( userId ) => {
//             dispatch( unfollowAC ( userId ) );
//         },
//         setUsers: ( users ) => {
//             dispatch( setUsersAC ( users ) );
//         },
//         setTotalUsers: ( totalUsers ) => {
//             dispatch( setTotalUsersAC ( totalUsers ) );
//         },
//         setCurrentPage: ( pageNumber ) => {
//             dispatch(setCurrentPageAC ( pageNumber ) );
//         },
//         toggleIsFetching: ( isFetching ) => {
//             dispatch( toggleIsFetchingAC (isFetching) )
//         }
//    }
// }

const UsersContainer = connect(mapStateToProps, 
    { follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching })(UsersAPIComponent);
export default UsersContainer;