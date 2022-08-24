import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/AuthRedirect";
import {sendMessage, updateInputNewMessage } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage, 
    }
}
export default compose(
    connect(mapStateToProps, {sendMessage, updateInputNewMessage}), 
    withAuthRedirect)
    (Dialogs);

