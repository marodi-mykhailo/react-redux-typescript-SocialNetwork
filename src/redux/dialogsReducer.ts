import {dialogsType, messageType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BOX'
const SEND_MESSAGE = 'SEND-MESSAGE'

export type InitialDialogState = {
    dialogs: Array<dialogsType>
    messages: Array<messageType>
    newMessageBody: string
}

let initialState: InitialDialogState = {
    dialogs: [
        {id: '1', name: 'Misha'},
        {id: '2', name: 'Yura'},
        {id: '3', name: 'Nastya'},
        {id: '4', name: 'Ivan'},
    ],
    messages: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'How is your day?'},
        {id: '3', message: 'Bue have a good day'},
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action: any) => {
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
