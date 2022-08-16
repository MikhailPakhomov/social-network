const SET_CURRENT_USER_ID = "SET_CURRENT_USER_ID";

let initialState = {
    currentUserID: 2
}

const navbarReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CURRENT_USER_ID: {
            return {
                ...state,
                currentUserID: action.currentUserID
            }
        }
        default: return state;
    }
}

export const setCurrentUserID = (currentUserID) => ({type: "SET_CURRENT_USER_ID", currentUserID});

export default navbarReducer;