import React from "react";
import s from './Users.module.css';
import userPhoto from '../../images/net_avatarki.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return (<div>
        <div className={s.pagenumbers}>
            {pages.map(p => {
                if (p <= 5) {
                    return (<div className={props.currentPage === p ? s.selectedPage : s.pageItem}
                        onClick={(e) => { props.onPageChanged(p); }}>{p}</div>
                    )
                }
            }
            )}

        </div>
        <div className={s.users}>{props.users.map(u => <div key={u.id}>
            <div className={s.items}>

                <div className={s.ava}>
                    <NavLink to={'./../profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}></img>
                    </NavLink>
                </div>

                <div className={s.fullname}>{u.name}</div>
                <div className={s.status}>{u.status}</div>
                <div className={s.button}>
                    {u.followed
                        ? <button onClick={ () =>{
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "8408e9dc-244e-4bf7-8c81-0ed9af50d5b1"
                                }
                            })
                            .then((response) => {
                                if (response.data.resultCode === 0)
                                 props.unfollow(u.id) 
                            })
                        }

                            
                        }>Unfollow</button>
                        : <button onClick={() => { 
                            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true,
                            headers: {
                                "API-KEY": "8408e9dc-244e-4bf7-8c81-0ed9af50d5b1"
                            }})
                            .then((response) => {
                                if (response.data.resultCode === 0)
                                 props.follow(u.id) 
                            }) 
                            }}>Follow</button>}
                </div>


                {/* <div className="location">{u.location.country}</div>
                <div className="location">{u.location.city}</div> */}

            </div>
        </div>
        )
        }
        </div>
    </div>
    );


}

export default Users;