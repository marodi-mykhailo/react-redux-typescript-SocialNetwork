import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./DialogItem/Message/Message";

type DialogsPropsType = {

}



const Dialogs = (props: DialogsPropsType) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name={"Misha"} id={'1'}/>
                <DialogItem name={"Yura"} id={'2'}/>
                <DialogItem name={"Nastya"} id={'3'}/>
                <DialogItem name={"Ivan"} id={'4'}/>
            </div>
            <div className={style.messages}>
                <Message message={"Hi"}/>
                <Message message={"How is your day?"}/>
                <Message message={"Bue hawe a good day"}/>
            </div>
        </div>
    )
}

export default Dialogs;
