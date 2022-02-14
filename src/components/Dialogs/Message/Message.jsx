import React from "react";
import s from './Message.module.css';

const Message = (props) => {
    return (
        <div className={s.message}>
            <div className={s.messageItem}>
                <div className={s.messageText}>{props.message}</div>
                <div className={s.messageTime}>{props.time}</div>
            </div>
            
        </div>

    );
}

export default Message;