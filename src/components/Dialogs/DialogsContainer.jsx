import React from "react";
import { connect } from "react-redux";
import {
    sendMessageActionCreator,
    updateInputNewMessageActionCreator
}
    from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        onMessageChange: (text) => {
            dispatch(updateInputNewMessageActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;