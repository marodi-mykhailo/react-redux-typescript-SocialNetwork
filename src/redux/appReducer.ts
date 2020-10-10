import {getLoggedUserData} from "./authReducer";

const SET_INITIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS"

type InitializedStateType = {
    initialized: boolean
}

type AppActionsType = ReturnType<typeof setInitializedSuccess>

const initialState = {
    initialized: false
}

const appReducer = (state: InitializedStateType= initialState, action:AppActionsType) => {
    switch (action.type) {
        case SET_INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
};

const setInitializedSuccess = () => ({
    type: SET_INITIALIZED_SUCCESS,
} as const)

export const initializeApp = () => (dispatch: any)=>{
    let promise = dispatch(getLoggedUserData())
    Promise.all([promise]).then(()=>{
        dispatch(setInitializedSuccess())
    })

}

export default appReducer;
