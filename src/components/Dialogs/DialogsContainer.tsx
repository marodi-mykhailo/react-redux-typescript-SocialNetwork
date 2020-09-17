import React, {ChangeEvent} from "react";
import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogsReducer";

type DialogsPropsType = {
    store: any
}


const DialogsContainer = (props: DialogsPropsType) => {
    debugger
    const dialogsData = props.store.getState().dialogsReducer;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageActionCreator())
    }

    let onNewMessageChange = (text: string) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(text))
    }
    return (
        <Dialogs dialogsData={dialogsData} sendMessageClick={onSendMessageClick} newMessageChange={onNewMessageChange}/>
    )
}

export default DialogsContainer;
