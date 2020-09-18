import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ActionsTypes} from "../../redux/store";

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsData: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageActionCreator())
        },
        onNewMessageChange: (text: string) => {
            dispatch(updateNewMessageBodyActionCreator(text))
        }
    }
}

const DialogsContainer: any =  connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

