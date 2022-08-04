import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    
    _state: {
        profilePage: {
            posts: [
                { id: 1, name: "Mikhail", message: "Hi, how are you?", likeCount: 23 },
                { id: 2, name: "Mikhail", message: "It`s my first post привет все норм пост такой ", likeCount: 10 },
                { id: 3, name: "Mikhail", message: "У меня все нормально", likeCount: 45 },
            ],
            newPostText: "",
        },

        dialogsPage: {
            dialogs: [
                { id: 1, name: "Mikhail", ava: 'https://i.pinimg.com/550x/a4/1d/da/a41ddae55fef329b4f74295ba758a424.jpg' },
                { id: 2, name: "Alena", ava: 'https://www.youloveit.ru/uploads/posts/2020-04/1586360554_youloveit_ru_dipper_gravity_falls_na_avu01.jpg' },
                { id: 3, name: "Eva", ava: 'https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka2.jpg' },
                { id: 4, name: "Arutik", ava: 'https://cspromogame.ru//storage/upload_images/avatars/1299.jpg' },
                { id: 5, name: "Andrey", ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4jRg1btnvqAdcADoMgIw6RyQIXMOpZw-kg&usqp=CAU' },
                { id: 6, name: "Zhenya", ava: 'https://rus-pic.ru/wp-content/uploads/2021/12/avatarki-dlja-malchikov-41-foto-a476ab0.jpg' },
            ],
            messages: [
                { id: 1, message: "Hi", time: "13:54" },
                { id: 2, message: "How is your it-kamasutra?", time: "13:54" },
                { id: 3, message: "Yo", time: "13:54" },
                { id: 3, message: "Yo", time: "13:54" },

            ],
            newMessageText: "",
        },
        sidebar: {
            friends: [
                { id: 1, name: "Alena", status: "online", ava: "https://www.youloveit.ru/uploads/posts/2020-04/1586360554_youloveit_ru_dipper_gravity_falls_na_avu01.jpg" },
                { id: 2, name: "Andrey", status: "online", ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4jRg1btnvqAdcADoMgIw6RyQIXMOpZw-kg&usqp=CAU" },
                { id: 3, name: "Eva", status: "offline", ava: "https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka2.jpg" }
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }

}

export default store;
window.store = store;