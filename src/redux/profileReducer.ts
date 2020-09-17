import {postType} from "./store";


const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

export type InitialProfileState = {
    post: Array<postType>
    newPostText: string
}

let initialState: InitialProfileState = {
    post: [
        {id: '1', message: 'Hi, how are you?', likesCount: 5},
        {id: '2', message: 'I love React.js', likesCount: 300},
    ],
    newPostText: '',
}

const profileReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: postType = {
                id: '3',
                message: state.newPostText,
                likesCount: 0
            }
            state.post.push(newPost);
            state.newPostText = ''
            return state
        case UPDATE_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state
    }

}

export const addPostActionCreator = () => ({type: ADD_POST} as const)

export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_POST_TEXT,
    newText: text
} as const)

export default profileReducer;
