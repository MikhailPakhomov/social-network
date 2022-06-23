import React from "react";
import s from './Message.module.css';

const Message = (props) => {
    
    return (
        <div className={s.message}>
            <div className={s.messageItem}>
                <div className={s.messageText}>
                    <div className={s.messageItemText}>{props.message}</div>
                </div>
                <div className={s.messageTime}>
                    <div className={s.messageItemTime}>{props.time}</div>
                </div>
                
            </div>
            
        </div>

    );
}

export default Message;