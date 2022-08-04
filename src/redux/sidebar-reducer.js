let initialState = {
    friends: [
        { id: 1, name: "Alena", status: "online", ava: "https://www.youloveit.ru/uploads/posts/2020-04/1586360554_youloveit_ru_dipper_gravity_falls_na_avu01.jpg" },
        { id: 2, name: "Andrey", status: "online", ava: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTC4jRg1btnvqAdcADoMgIw6RyQIXMOpZw-kg&usqp=CAU" },
        { id: 3, name: "Eva", status: "offline", ava: "https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka2.jpg" }
    ]
}

const sidebarReducer = (state = initialState, action) => {

    return state;
}

export default sidebarReducer;