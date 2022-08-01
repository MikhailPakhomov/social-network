import React from "react";
<<<<<<< HEAD
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setTotalUsersCount, setCurrentPage, toggleIsFetching } from "../../redux/users-reduser";
import UsersAPIComponent from "./UsersAPIComponent";
=======
import Users from "./Users";
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/users-reduser";
>>>>>>> b57745d5990a27a086641a7e87304cb2edd2b97d

let mapStateToProps = (state) => {

    return {
<<<<<<< HEAD
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
=======
        users: state.findUsers.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);
>>>>>>> b57745d5990a27a086641a7e87304cb2edd2b97d
export default UsersContainer;