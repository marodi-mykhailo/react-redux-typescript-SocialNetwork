import {authAPI} from "./api";

const SET_USER_DATA = "SET_USER_DATA"

export type authInitialStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

const authInitialState: authInitialStateType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

type authActionType = ReturnType<typeof setLoggedUserData>


const authReducer = (state = authInitialState, action: authActionType) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.userData,
                isAuth:true
            }
        }
        default:
            return state
    }
}


export const setLoggedUserData = (userData: authInitialStateType) => ({
        type: SET_USER_DATA,
        userData
    } as const
)

export const getLoggedUserData = () => {
    return (dispatch: any) =>{
        authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setLoggedUserData(response.data.data))
                }

            })
    }
}
export default authReducer;
