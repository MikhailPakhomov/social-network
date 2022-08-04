import React from 'react';
import s from "./Header.module.css";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return(
      <header className={s.header}>
        <img src='https://seeklogo.com/images/C/company-name-logo-C74A7D6F5A-seeklogo.com.png'/>
        
          <NavLink className={s.loginText} to={"/login"}>
            <div className={s.login}>Login</div>
          </NavLink>
        
      </header>
    );
}

export default Header;