import {combineReducers, createStore, applyMiddleware} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from "./appReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export type AppStateType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store;

export default store;
