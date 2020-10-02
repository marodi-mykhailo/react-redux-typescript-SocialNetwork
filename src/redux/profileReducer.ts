import {PhotosType} from "./usersReducer";
import {usersApi} from "./api";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE'
const SET_PROFILE_IS_FETCHING = 'SET_PROFILE_IS_FETCHING'

export type InitialProfileState = {
    profileInfo: ProfileInfoType
    post: Array<PostType>
    newPostText: string
    isFetching: boolean
}

export type ContactType = {
    [key: string]: string
    // github: string
    // vk: string
    // facebook: string
    // instagram: string
    // twitter: string
    // website: string
    // youtube: string
    // mainLink: string
}

export type ProfileInfoType = {
    userId: number
    aboutMe: string
    contacts: ContactType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    photos: PhotosType
}


export type PostType = {
    id: string
    message: string
    likesCount: number
}

export type ActionsProfileTypes =
    ReturnType<typeof addPost>
    | ReturnType<typeof updateNewPostText>
    | ReturnType<typeof setProfile>
    | ReturnType<typeof setProfileIsFetching>


let initialState: InitialProfileState = {
    profileInfo: {
        userId: 1, lookingForAJob: true, lookingForAJobDescription: "yes im looking",
        fullName: "MISHA MARODI", contacts: {
            github: "gitHub",
            vk: 'vk',
            facebook: 'facebook',
            instagram: 'instagram',
            twitter: 'twitter',
            website: 'website',
            youtube: 'youtube',
            mainLink: 'mainLink'
        },
        aboutMe: "aboutMe",
        photos: {
            large: "large",
            small: 'small'
        }
    },
    post: [
        {id: '1', message: 'Hi, how are you?', likesCount: 5},
        {id: '2', message: 'I love React.js', likesCount: 300},
    ],
    newPostText: '',
    isFetching: false,
}

const profileReducer = (state = initialState, action: any): InitialProfileState => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: '3',
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                post: [...state.post, newPost],
                newPostText: ''
            }
        }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_PROFILE:
            return {
                ...state,
                profileInfo: {...action.profileInfo}
            }
        case SET_PROFILE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }

}

export const addPost = () => ({type: ADD_POST} as const)

export const updateNewPostText = (text: string) => ({
        type: UPDATE_POST_TEXT,
        newText: text
    } as const
)

export const setProfile = (profileInfo: any) => ({
        type: SET_PROFILE,
        profileInfo
    } as const
)

export const setProfileIsFetching = (isFetching: boolean) => ({
        type: SET_PROFILE_IS_FETCHING,
        isFetching
    } as const
)

export const getUserProfile = (userId: string) => {
    return (dispatch: any) =>{
        dispatch(setProfileIsFetching(true))
        usersApi.getUserProfile(userId).then(response => {
            dispatch(setProfile(response.data))
            dispatch(setProfileIsFetching(false))
        })
    }
}

export default profileReducer;
