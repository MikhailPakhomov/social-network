import React from "react";
import { NavLink } from "react-router-dom";
import s from './Sidebar.module.css';

const Sidebar = (props) => {

    return (
        <div className={s.sidebar}>
            <div className={s.sidebarItems}>
                <NavLink to={props.name}>
                    <div className={s.ava}>
                        <img src={props.ava}></img>
                    </div>
                    <div className={s.name}>
                        {props.name}
                    </div>
                </NavLink>
                <div className={s.status}>
                    {props.status}
                </div>
            </div>

        </div>
    );
}

export default Sidebar;