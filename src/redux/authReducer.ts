import {authAPI} from "./api";

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


export const setLoggedUserData = (id:number | null, login:string | null, email:string | null, isAuth:boolean = false) => ({
        type: SET_USER_DATA,
        payload: {id, login, email, isAuth}
    } as const
)

export const getLoggedUserData = () => {
    return (dispatch: any) => {
        authAPI.me()
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
                }
            })
    }
}

export const logOut = () => {
    return (dispatch: any) => {
        authAPI.logOut()
            .then(response =>{
                if(response.data.resultCode === 0){
                    dispatch(setLoggedUserData(null,null,null, false))
                }
            })
    }
}
export default authReducer;
