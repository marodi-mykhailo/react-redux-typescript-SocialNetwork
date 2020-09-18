import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogsReducer";
import StoreContext from "../../StoreContext";

type DialogsPropsType = {}


const DialogsContainer = (props: DialogsPropsType) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const dialogsData = store.getState().dialogsPage;

                    let onSendMessageClick = () => {
                        store.dispatch(sendMessageActionCreator())
                    }

                    let onNewMessageChange = (text: string) => {
                        store.dispatch(updateNewMessageBodyActionCreator(text))
                    }
                    return (
                        <Dialogs dialogsData={dialogsData}
                                 sendMessageClick={onSendMessageClick}
                                 newMessageChange={onNewMessageChange}/>
                    )

                }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;
