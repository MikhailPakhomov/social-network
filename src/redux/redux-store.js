import { combineReducers, createStore } from "redux";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import findUsersReducer from "./users-reduser";

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    sidebar : sidebarReducer,
    findUsers : findUsersReducer
});


let store = createStore(reducers);

window.store = store;

export default store;