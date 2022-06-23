const ADD_NEW_POST = "ADD-NEW-POST";
const UPDATE_INPUT_NEW_POST = "UPDATE-INPUT-NEW-POST";

let initialState = {
    posts: [
        { id: 1, name: "Mikhail", message: "Hi, how are you?", likeCount: 23 },
        { id: 2, name: "Mikhail", message: "It`s my first post привет все норм пост такой ", likeCount: 10 },
        { id: 3, name: "Mikhail", message: "У меня все нормально", likeCount: 45 },
    ],
    newPostText: "",
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST: {
            let text = state.newPostText;
            let newPost = {
                id: 4,
                name: "Mikhail",
                message: text,
                likeCount: 0
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ""
            }            
        }
        case UPDATE_INPUT_NEW_POST: {
            return{
                ...state,
                newPostText: action.text
            }
        }
        default: return state;

    }
}

export const addNewPostActionCreator = () => ({ type: ADD_NEW_POST });
export const updateInputNewPostActionCreator = (text) =>
    ({ type: UPDATE_INPUT_NEW_POST, text: text });
export default profileReducer;