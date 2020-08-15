import style from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogsItemPropsType = {
    name: string
    id: string
}

const DialogItem = (props: DialogsItemPropsType) => {
    let path = "/dialogs/" + props.id
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;
