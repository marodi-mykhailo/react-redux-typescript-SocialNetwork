const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

export type InitialDialogState = {
    dialogs: Array<dialogsType>
    messages: Array<messageType>
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
}

const dialogsReducer = (state = initialState, action: ActionsDialogsTypes) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                newMessageBody: '',
                messages: [
                    ...state.messages,
                    {
                        id: '6',
                        message: action.newMessage
                    }
                ]
            }
        default:
            return state
    }
}

export const sendMessageActionCreator = (newMessage: string) => ({type: SEND_MESSAGE, newMessage} as const)

export default dialogsReducer;
