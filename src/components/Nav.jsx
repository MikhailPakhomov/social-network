import React from 'react';
import s from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={s.nav}>
        <div>
          <a class={s.link} href="#">Profile</a>
        </div>
        <div>
          <a class={s.link} href="#">Messages</a>
        </div>
        <div>
          <a class={s.link} href="#">News</a>
        </div>
        <div>
          <a class={s.link} href="#">Music</a>
        </div>
        <div>
          <a class={s.link} href="#">Settings</a>
        </div>
      </nav>
    );
}

export default Nav;