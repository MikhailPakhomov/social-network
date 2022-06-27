import React from "react";
import s from './Users.module.css';
import axios from 'axios'

const Users = (props) => {
 
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
            props.setUsers(response.data.items);
            console.log(response.data.items);
        });
    //     props.setUsers([
    //         {
    //             id: 1,
    //             followed: false,
    //             fullname: "Mikhail P",
    //             ava: "https://i.pinimg.com/550x/a4/1d/da/a41ddae55fef329b4f74295ba758a424.jpg",
    //             status: "Лучше всего хранит тайну тот, кто её вообще не знает.",
    //             location: {
    //                 country: "Russia",
    //                 city: "Sochi"
    //             },
    //         },
    //         {
    //             id: 2,
    //             followed: true,
    //             fullname: "Arutik Ch",
    //             ava: "https://tiktok-wiki.ru/wp-content/uploads/2020/05/avatarki-dlya-tik-toka2.jpg",
    //             status: "Воля - это то, что заставляет тебя побеждать, когда твой рассудок говорит тебе, что ты повержен.",
    //             location: {
    //                 country: "Abhazia",
    //                 city: "Gagra"
    //             },
    //         },
    //         {
    //             id: 3,
    //             followed: false,
    //             fullname: "Zhenya N",
    //             ava: "https://rus-pic.ru/wp-content/uploads/2021/12/avatarki-dlja-malchikov-41-foto-a476ab0.jpg",
    //             status: "Что труднее достается – то больше ценится.",
    //             location: {
    //                 country: "Russia",
    //                 city: "Saratov"
    //             },
    //         }
    //     ])
     }
    return (
        <div>{props.users.map(u => <div key={u.id}>
            <div className={s.ava}>
                <img src={u.photos.large}></img></div>
            <div>
                {u.followed
                    ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                    : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
            </div>
            <div>
                <div className="fullname">{u.name}</div>
                <div className="status">{u.status}</div>
                {/* <div className="location">{u.location.country}</div>
                <div className="location">{u.location.city}</div> */}
            </div>
        </div>
        )
        }
        </div>
    );
}

export default Users;