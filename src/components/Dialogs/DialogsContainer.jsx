import React from "react";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/AuthRedirect";
import {sendMessage, updateInputNewMessage } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";


let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage, 
    }
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer=connect(mapStateToProps, {sendMessage, updateInputNewMessage})(AuthRedirectComponent);

export default DialogsContainer;