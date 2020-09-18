import {combineReducers, createStore} from "redux";
import profileReducer, {InitialProfileState} from "./profileReducer";
import dialogsReducer, {InitialDialogState} from "./dialogsReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
})


let store = createStore(reducers);
export type AppStateType = ReturnType<typeof reducers>

export default store;
