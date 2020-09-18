import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
})


let store = createStore(reducers);
export type AppStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;

export default store;
