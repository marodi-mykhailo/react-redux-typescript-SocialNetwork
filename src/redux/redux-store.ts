import {combineReducers, createStore} from "redux";
import profileReducer, {InitialProfileState} from "./profileReducer";
import dialogsReducer, {InitialDialogState} from "./dialogsReducer";


let reducers = combineReducers({
    profileReducer: profileReducer,
    dialogsReducer: dialogsReducer,
})

export type ReduxStoreType = {
    profileReducer: InitialProfileState,
    dialogsReducer: InitialDialogState
}

let store = createStore(reducers);

export default store;
