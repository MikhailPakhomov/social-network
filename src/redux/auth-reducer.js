const SET_AUTH_USER_DATA = "SET_USER_DATA";
const TOGGLE_IS_AUTH = "TOGGLE_IS_AUTH";


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            {
                return {
                    ...state,
                    ...action.id,
                    ...action.email,
                    ...action.login,

                }
            }
        case TOGGLE_IS_AUTH:
               {
                return {
                    ...state,
                    isAuth: action.isAuth
                }
               }
        default:
            return state;

    }
}
//export const setAuthUserData = ( id, email, login ) => ( { type: SET_AUTH_USER_DATA, data: { id, email, login } } );
export const setAuthUserData = ( id, email, login ) => ( { type: SET_AUTH_USER_DATA,  id, email, login } );
export const toggleIsAuth = ( isAuth ) => ( {type: TOGGLE_IS_AUTH, isAuth });

export default authReducer;