import Dialogs from "./Dialogs";
import {
    ActionsDialogsTypes,
    sendMessageActionCreator,
    updateNewMessageBodyActionCreator
} from "../../redux/dialogsReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux"

const mapStateToProps = (state: AppStateType) => {
    return {
        dialogsData: state.dialogsPage,
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

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)



