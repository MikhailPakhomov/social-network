import React from "react";
import { NavLink } from "react-router-dom";
import s from './DialogItem.module.css';

const getLinkStyle = dialogsName => dialogsName.isActive ? s.activeItem : s.dialogItem;

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div>
            <NavLink className={getLinkStyle} to={path}>
                <div className={s.ava}>
                    <img src={props.ava}></img>
                </div>
                <div className={s.dialogsName}>
                    {props.name}
                </div>
                </NavLink>
        </div>
    );
}

export default DialogItem;