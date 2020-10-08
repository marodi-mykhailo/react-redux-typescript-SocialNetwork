import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./DialogItem/Message/Message";
import {dialogsType, messageType} from "../../redux/dialogsReducer";
import {Redirect} from "react-router-dom";
import {MessageReduxForm} from "../../common/Forms/MessageForm/MessageForm";


type DialogsPropsType = {
    dialogsData: any
    onSendMessageClick: (value: any) => void
    isAuth: boolean
}


const Dialogs = (props: DialogsPropsType) => {

    const dialogsElements = props.dialogsData.dialogs.map((dialog: dialogsType, index: string) => (
            <DialogItem key={index}
                        name={dialog.name}
                        id={dialog.id}/>
        )
    )

    const messagesElements = props.dialogsData.messages.map((message: messageType, index: string) => (
            <Message key={index}
                     message={message.message}/>
        )
    )

    const onSendMessageClick = (value: any) => {
        props.onSendMessageClick(value.newMessage);
    }

    if (!props.isAuth) return <Redirect to={'/login'}/>
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
                <MessageReduxForm onSubmit={onSendMessageClick}/>
            </div>
        </div>
    )
}

export default Dialogs;
