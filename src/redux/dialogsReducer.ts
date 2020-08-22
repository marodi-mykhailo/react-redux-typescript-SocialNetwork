import {postType} from "./state";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BOX'
const SEND_MESSAGE = 'SEND-MESSAGE'

const dialogsReducer = (state: any, action: any) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body
            return state
        case SEND_MESSAGE:
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: '6', message: body})
            return state
        default:
            return state
    }
}

export default dialogsReducer;