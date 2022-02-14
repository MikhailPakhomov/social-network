import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    const dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} ava={d.ava} name={d.name}/>);
    const messagesElements = props.state.messages.map(m => <Message  message={m.message} time={m.time} />);

    let newMessageElement = React.createRef();

    let sendMessage = () => {
      let text = newMessageElement.current.value;
      alert(text);
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.inputMessage}>
                    <div className={s.inputText}>
                        <textarea ref={newMessageElement}></textarea>
                    </div>
                    <div className={s.buttonSend}>
                        <button onClick={sendMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;