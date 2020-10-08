import Dialogs from "./Dialogs";
import {
    ActionsDialogsTypes,
    sendMessageActionCreator,
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
        onSendMessageClick: (newMessage: string) => {
            dispatch(sendMessageActionCreator(newMessage))
        },

    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)



