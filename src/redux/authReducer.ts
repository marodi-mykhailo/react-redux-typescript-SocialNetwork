import {authAPI, authAPI2} from "./api";
import {stopSubmit} from "redux-form";
import {Dispatch} from "react";

const SET_USER_DATA = "SET_USER_DATA"

export type authInitialStateType = {
    id: number | null
    login: string | null
    email: string | null
    isAuth: boolean
}

type loginDataType = {
    email: string,
    password: string,
    rememberMe: boolean
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
                ...action.payload,
            }
        }
        default:
            return state
    }
}


export const setLoggedUserData = (id: number | null, login: string | null, email: string | null, isAuth: boolean = false) => ({
        type: SET_USER_DATA,
        payload: {id, login, email, isAuth}
    } as const
)

export const getLoggedUserData = () => {
    return (dispatch: any) => {
        return authAPI.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    dispatch(setLoggedUserData(id, login, email, true))
                }

            })
    }
}

export const login = ({email, password, rememberMe}: loginDataType) => {
    return (dispatch: any) => {
        authAPI.login(email, password, rememberMe)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getLoggedUserData())
                } else {
                    let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some Errors"
                    dispatch(stopSubmit('login', {_error: message}))
                }
            })
    }
}

export const logOut = () => {
    return (dispatch: any) => {
        authAPI.logOut()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setLoggedUserData(null, null, null, false))
                }
            })
    }
}
export default authReducer;

////////////////////// new API /////////////////////////////////

type RegisterDataType = {
    message: string
    resultCode: number
}

export type AuthReducerInitialState2Type = {
    isRegister: true | false
}

const authReducerInitialState2:AuthReducerInitialState2Type = {
    isRegister: false
}

export const authReducer2 = (state = authReducerInitialState2, action: AuthReducer2ActionType):AuthReducerInitialState2Type => {
    switch (action.type) {
        case "SET_REGISTER":
            return {
                ...state,
                isRegister: true
            }
        default:
            return state

    }
}

export const register = (username: string, email: string, password: string) => {
    return (dispatch: any) => {
        authAPI2.register(username, email, password)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setRegister())
                }
            })
    }
}

type AuthReducer2ActionType = ReturnType<typeof setRegister>

const setRegister = () => ({
    type: 'SET_REGISTER'
} as const)


