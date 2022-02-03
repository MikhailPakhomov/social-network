import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Nav.module.css";
//import getLinkStyle from '../../functions/getLinkStyle';

const getLinkStyle = navData=>navData.isActive ? s.active:s.link;

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
              <NavLink className={getLinkStyle} to ="/profile">Profile</NavLink>
            </div>
            <div className={s.item}>
              <NavLink className={getLinkStyle} to="/dialogs">Messages</NavLink>
            </div>
            <div className={s.item}>
              <NavLink className={getLinkStyle} to="/news">News</NavLink>
            </div>
            <div className={s.item}>
              <NavLink className={getLinkStyle} to="/music">Music</NavLink>
            </div>
            <div className={s.item}>
              <NavLink className={getLinkStyle} to="/settings">Settings</NavLink>
            </div>
      </nav>
    );
}

export default Nav;