const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
<<<<<<< HEAD
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
}

const findUsersReducer = (state = initialState, action) => {

=======

let initialState = {
    users: []
}

const findUsersReducer = (state = initialState, action) => {
    
>>>>>>> b57745d5990a27a086641a7e87304cb2edd2b97d

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
<<<<<<< HEAD
                        return {...u, followed: true }
=======
                        return { ...u, followed: true }
>>>>>>> b57745d5990a27a086641a7e87304cb2edd2b97d
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
<<<<<<< HEAD
                        return {...u, followed: false }
=======
                        return { ...u, followed: false }
>>>>>>> b57745d5990a27a086641a7e87304cb2edd2b97d
                    }
                    return u;
                })
            }
<<<<<<< HEAD
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
        default:
            return state;
=======
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users ]}
        }
        default: return state;
>>>>>>> b57745d5990a27a086641a7e87304cb2edd2b97d

    }
}

<<<<<<< HEAD
export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
=======
export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
>>>>>>> b57745d5990a27a086641a7e87304cb2edd2b97d

export default findUsersReducer;