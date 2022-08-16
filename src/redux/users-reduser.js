import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS"


let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: []
}

const findUsersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {

                        return {...u, followed: false }
                    }
                    return u;
                })
            }

        case SET_USERS:
            {
                return {...state, users: action.users }
            }
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount }
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage }
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching }
        case FOLLOWING_IN_PROGRESS:
            return {
                ...state, 
                isFollowingInProgress: action.isFollowingInProgress 
                ?  [...state.isFollowingInProgress, action.userId]
                : state.isFollowingInProgress.filter(id => id !== action.userId) 
            }
        default:
            return state;
    }
}


export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingInProgress = (isFollowingInProgress, userId) => ({ type: FOLLOWING_IN_PROGRESS, isFollowingInProgress, userId })

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
        .then((data) => {
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            console.log(data);
        });
    }

}
export const thunkUnfollow = (userId ) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));
        usersAPI.unfollow(userId).then((data) => {
            if (data.resultCode === 0) dispatch (unfollow(userId));
            dispatch(toggleFollowingInProgress(false, userId));
        })
    }
}
export const thunkFollow = (userId ) => {
    return (dispatch) => {
        dispatch(toggleFollowingInProgress(true, userId));
        usersAPI.follow(userId).then((data) => {
            if (data.resultCode === 0) dispatch(follow(userId));
            dispatch(toggleFollowingInProgress(false, userId));
        })
    }
}

export default findUsersReducer;