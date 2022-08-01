import React from "react";
import s from './Users.module.css';
<<<<<<< HEAD
import userPhoto from '../../images/net_avatarki.jpg';
import { NavLink } from 'react-router-dom';

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
                        ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                        : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
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

=======
import * as axios from 'axios';
import userPhoto from '../../images/net_avatarki.jpg'

class Users extends React.Component {

    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then((response) => {
                this.props.setUsers(response.data.items);
                console.log(response.data.items);
            });
    }

    render() {
        return (<div>
            <div className={s.users}>{this.props.users.map(u => <div key={u.id}>
                <div className={s.items}>
                    <div className={s.ava}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto}></img>
                    </div>
                    <div className={s.fullname}>{u.name}</div>
                    <div className={s.status}>{u.status}</div>
                    <div className={s.button}>
                        {u.followed
                            ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
>>>>>>> b57745d5990a27a086641a7e87304cb2edd2b97d

}

export default Users;