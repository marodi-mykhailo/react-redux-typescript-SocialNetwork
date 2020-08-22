import {postType} from "./state";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const profileReducer = (state: any, action: any) => {
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

export default profileReducer;
