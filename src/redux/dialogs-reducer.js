const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_INPUT_NEW_MESSAGE = "UPDATE-INPUT-NEW-MESSAGE";

let initialState = {
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
        { id: 4, message: "Yo", time: "13:54" },

    ],
    newMessageText: "",
};



const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let text = state.newMessageText;
            let newMessage = {
                id: 10,
                message: text,
                time: "13:54"
            };
            return{
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ""
            }

        }
        case UPDATE_INPUT_NEW_MESSAGE: {
            return {
                ...state,
                newMessageText: action.text
            }
            
        }
        default: return state;
    }

}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateInputNewMessageActionCreator = (text) =>
    ({ type: UPDATE_INPUT_NEW_MESSAGE, text: text });
export default dialogsReducer;