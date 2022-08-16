import { applyMiddleware, combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import findUsersReducer from "./users-reduser";
import authReducer from "./auth-reducer"
import navbarReducer from "./navbar-reducer"
import thunk from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    navbar: navbarReducer,
    sidebar: sidebarReducer,
    findUsers: findUsersReducer,
    auth: authReducer
});


let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;