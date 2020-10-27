import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./DialogItem/Message/Message";
import {dialogsType, messageType} from "../../redux/dialogsReducer";
import {Redirect} from "react-router-dom";
import {MessageReduxForm} from "../../common/Forms/MessageForm/MessageForm";
import {Paper} from "@material-ui/core";
import MessageSearch from "./MessageSearch/MessageSearch";


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
            <Paper elevation={3} className={style.dialogsItems}>
                <MessageSearch/>
                {dialogsElements}
            </Paper>
            <Paper className={style.filterBox}>
                <div className={style.wrapper}>
                  <div className={true ? style.active:" "}><span>All Chats</span></div>
                  <div className={false ? style.active: " "}><span>Unwatched</span></div>
                </div>
            </Paper>
            {/*<div className={style.messages}>*/}
            {/*    {messagesElements}*/}
            {/*    <MessageReduxForm onSubmit={onSendMessageClick}/>*/}
            {/*</div>*/}
        </div>
    )
}

export default Dialogs;
