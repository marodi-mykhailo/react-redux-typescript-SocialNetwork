import React, {ChangeEvent} from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./DialogItem/Message/Message";


type DialogsPropsType = {
    dialogsData: any
    onSendMessageClick: () => void
    onNewMessageChange: (text: string) => void
}


const Dialogs = (props: DialogsPropsType) => {
    let dialogsElements = props.dialogsData.dialogs.map((dialog: { name: string; id: string; }) => <DialogItem name={dialog.name} id={dialog.id}/>)
    let messagesElements = props.dialogsData.messages.map((message: { message: string; }) => <Message message={message.message}/>)
    let newMessageBody = props.dialogsData.newMessageBody


    let onSendMessageClick = () => {
        props.onSendMessageClick();
    }

    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.onNewMessageChange(body);
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
                                   placeholder={'Enter message'}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
