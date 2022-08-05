import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import findUsersReducer from "./users-reduser";
import authReducer from "./auth-reducer"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    findUsers: findUsersReducer,
    auth: authReducer
});


let store = createStore(reducers);

window.store = store;

export default store;