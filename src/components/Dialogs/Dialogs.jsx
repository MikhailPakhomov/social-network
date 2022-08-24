import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem id={d.id} key={d.id} ava={d.ava} name={d.name}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message  key={m.id}message={m.message} time={m.time} />);

    let newMessageText = props.dialogsPage.newMessageText;

    let onSendMessage = () => {
        props.onSendMessage();
    };

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.onMessageChange(text);
      }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div className={s.messagesItems}>
                {messagesElements} 
                </div>
                <div className={s.inputMessage}>
                    <div className={s.inputText}>
                        <textarea onChange={onMessageChange}
                                  value={newMessageText}
                                   
                                  />
                    </div>
                    <div className={s.buttonSend}>
                        <button onClick={onSendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;