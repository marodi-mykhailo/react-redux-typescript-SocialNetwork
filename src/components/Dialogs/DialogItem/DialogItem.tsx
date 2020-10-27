import React from "react";
import style from "../DialogItem/DialogItem.module.css"
import {NavLink} from "react-router-dom";


type DialogsItemPropsType = {
    name: string
    id: string
}

const DialogItem = (props: DialogsItemPropsType) => {
    let path = "/dialogs/" + props.id
    return (<div className={style.wrapper}>
            {/*<NavLink to={path}>{props.name}</NavLink>*/}
            <div className={style.imgBox}>
                <img src={'https://www.bemanistyle.com/wp-content/uploads/2018/01/Linux-Avatar-300px.png'}
                     alt={''}/>
            </div>
            <div className={style.messBox}>
                <div className={style.secondBox}>
                    <div className={style.userName}>
                        <span>Yurii Sczehliuk</span>
                    </div>
                    {true ? <div className={style.message}>
                            <img
                                src={'https://sun9-22.userapi.com/impf/c626331/v626331348/4ec31/T6oBmpxjdKI.jpg?size=100x0&quality=88&crop=2,0,957,957&sign=8f469abab45be967037deb59b37d4630&ava=1'}
                                alt={''}/>
                            <div className={style.text}><span>My message</span></div>
                        </div>
                        : <div className={style.message}>
                            <div className={style.text}><span>My message</span></div>
                        </div>
                    }
                </div>
                <div className={style.dateBox}>
                    <span>3 July</span>
                </div>
            </div>
        </div>
    )
}

export default DialogItem;
