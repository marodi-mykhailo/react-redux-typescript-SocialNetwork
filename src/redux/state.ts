export type postType = {
    id: string
    message: string
    likesCount: number
}

export type dialogsType = {
    id: string
    name: string
}

export type messageType = {
    id: string
    message: string
}

export type profilePageType = {
    post: Array<postType>
    newPostText: string
}

export type dialogsPageType = {
    dialogs: Array<dialogsType>
    messages: Array<messageType>
}

export type RootStateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    _callSubscriber: (state: RootStateType) => void
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = ReturnType<typeof addPostActionCreator > | ReturnType<typeof updateNewPostTextActionCreator>

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';


let store: StoreType = {
    _state: {
        profilePage: {
            post: [
                {id: '1', message: 'Hi, how are you?', likesCount: 5},
                {id: '2', message: 'I love React.js', likesCount: 300},
            ],
            newPostText: 'k'
        },
        dialogsPage: {
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
            ]
        }
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    _callSubscriber(state: RootStateType) {
        console.log("state changed")
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            const newPost: postType = {
                id: '3',
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.post.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else if (action.type === 'UPDATE-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }
    }

}
export const addPostActionCreator = () => ({type: ADD_POST} as const)

export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_POST_TEXT,
    newText: text
} as const)

export default store;