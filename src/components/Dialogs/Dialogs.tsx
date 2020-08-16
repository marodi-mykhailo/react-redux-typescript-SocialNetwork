import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./DialogItem/Message/Message";

type DialogsPropsType = {}


const Dialogs = (props: DialogsPropsType) => {
    const dialogs = [
        {id: '1', name: 'Misha'},
        {id: '2', name: 'Yura'},
        {id: '3', name: 'Nastya'},
        {id: '4', name: 'Ivan'},
    ]

    let dialogsElements = dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)

    const messages = [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How is your day?'},
        {id: '3', message: 'Bue have a good day'},
    ]

    let messagesElements = messages.map(message => <Message message={message.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
