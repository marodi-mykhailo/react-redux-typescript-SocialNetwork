import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./DialogItem/Message/Message";
import {
    ActionsTypes,
    dialogsPageType,
    sendMessageCreator,
    updateNewMessageBodyCreator
} from "../../redux/state";

type DialogsPropsType = {
    dialogPage: dialogsPageType
    dispatch: (action: ActionsTypes) => void
}


const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)


    let messagesElements = props.dialogPage.messages.map(message => <Message message={message.message}/>)
    let newMessageBody = props.dialogPage.newMessageBody


    let onSendMessageClick = () => {
        props.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageBodyCreator(body))
    }
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <div>
                    <div><textarea value={newMessageBody}
    onChange={onNewMessageChange}
    placeholder={'Entet message'}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
