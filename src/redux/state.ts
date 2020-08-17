import {renderEntireTree} from "../render";

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


let state: RootStateType = {
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
}

export const addPost = () => {
    const newPost:postType = {
        id: '3',
        message: state.profilePage.newPostText,
        likesCount: 0
    }
    state.profilePage.post.push(newPost);
    state.profilePage.newPostText = ''
    renderEntireTree(state)

}

export const updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText;
    renderEntireTree(state)
}

export default state;
