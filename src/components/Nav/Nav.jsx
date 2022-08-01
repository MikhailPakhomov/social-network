import React from 'react';
import { NavLink } from 'react-router-dom';
import Sidebar from './../Sidebar/Sidebar';
import s from "./Nav.module.css";

const getLinkStyle = navData => navData.isActive ? s.active : s.link;

const Nav = (props) => {
  
  const sidebarElements = props.friends.map(s => <Sidebar key={s.id} id={s.id} name={s.name} ava={s.ava} status={s.status} />);

  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink className={getLinkStyle} to="/profile">Profile</NavLink>
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
      <div className={s.item}>
        <NavLink className={getLinkStyle} to="/users">Find Users</NavLink>
      </div>
      <div className={s.sidebar}>
        <div className={s.sidebarLink}>
          <NavLink className={s.sidebarLink} to="/friends">Friends</NavLink>
        </div>
        <div className={s.sidebarItems}>
          {sidebarElements}
        </div>
      </div>
    </nav>
  );
}

export default Nav;