import React from 'react';
import { NavLink } from 'react-router-dom';
import s from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={s.nav}>
        <div>
          <NavLink className={s.link} to ="/profile">Profile</NavLink>
        </div>
        <div>
          <NavLink className={s.link} to="/dialogs">Messages</NavLink>
        </div>
        <div>
          <NavLink className={s.link} to="/news">News</NavLink>
        </div>
        <div>
          <NavLink className={s.link} to="/music">Music</NavLink>
        </div>
        <div>
          <NavLink className={s.link} to="/settings">Settings</NavLink>
        </div>
      </nav>
    );
}

export default Nav;