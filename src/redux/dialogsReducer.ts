const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export type InitialDialogState = {
    dialogs: Array<dialogsType>
    messages: Array<messageType>
    newMessageBody: string
}
export type dialogsType = {
    id: string
    name: string
}

export type messageType = {
    id: string
    message: string
}

export type ActionsDialogsTypes =
    | ReturnType<typeof sendMessageActionCreator>
    | ReturnType<typeof updateNewMessageBodyActionCreator>

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
            return {...state, newMessageBody: action.body}
        case SEND_MESSAGE:
            return {
                ...state,
                newMessageBody: '',
                messages: [
                    ...state.messages,
                    {
                        id: '6',
                        message: state.newMessageBody
                    }
                ]
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE} as const)

export const updateNewMessageBodyActionCreator = (body: string) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
} as const)

export default dialogsReducer;
