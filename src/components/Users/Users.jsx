import React from "react";
import s from './Users.module.css';
import userPhoto from '../../images/net_avatarki.jpg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
import { usersAPI } from "../../api/api";

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
                        ? <button disabled={props.isFollowingInProgress.some(id => id === u.id)} 
                                  onClick={() => { props.unfollow (u.id)}
                        }>Unfollow</button>
                        : <button disabled={props.isFollowingInProgress.some (id => id === u.id)} 
                                  onClick={() => { props.follow (u.id) }}>Follow</button>}
                </div>
            </div>
        </div>
        )}
        </div>
    </div>
    );
}

export default Users;