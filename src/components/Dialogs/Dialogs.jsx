import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

const getLinkStyle = dialogsName=>dialogsName.isActive ? s.active:s.dialog;

const DialogItem = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div>
            <NavLink className={getLinkStyle} to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props)=>{
    return(
         <div className={s.message}>{props.text}</div>
    );
}
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogs_items}>
                <DialogItem id="1" name="Mikhail"/>
                <DialogItem id="2" name="Alena"/>
                <DialogItem id="3" name="Eva"/>
                <DialogItem id="4" name="Andrey"/>
                <DialogItem id="5" name="Arutik"/>
                <DialogItem id="6" name="Zhenya"/>

            </div>
            <div className={s.messages}>
                <Message text="Hi" />
                <Message text="How is your it-kamasutra?" />
                <Message text="Yo" />
            </div>
        </div>
    );
}

export default Dialogs;