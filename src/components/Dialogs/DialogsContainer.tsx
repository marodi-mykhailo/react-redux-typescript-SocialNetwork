import Dialogs from "./Dialogs";
import {
    ActionsDialogsTypes,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsData: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsDialogsTypes) => void) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageActionCreator())
        },
        onNewMessageChange: (text: string) => {
            dispatch(updateNewMessageBodyActionCreator(text))
        }
    }
}

const DialogsContainer: any =  connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

