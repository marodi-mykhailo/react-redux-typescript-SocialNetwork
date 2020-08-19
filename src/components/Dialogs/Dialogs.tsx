import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./DialogItem/Message/Message";
import {dialogsPageType, RootStateType} from "../../redux/state";

type DialogsPropsType = {
    dialogPage: dialogsPageType
}


const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogPage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>)



    let messagesElements = props.dialogPage.messages.map(message => <Message message={message.message}/>)

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