import style from "../../Dialogs.module.css";
import React from "react";

type MessagePropsType = {
    message: string
}


const Message = (props:MessagePropsType) =>{
    return(
        <div className={style.message}>{props.message}</div>
    )
}

export default Message;
