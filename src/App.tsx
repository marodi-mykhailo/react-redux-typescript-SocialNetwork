import React from 'react';
import styles from './App.module.css'
import Head from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {ActionsTypes} from "./redux/store";
import {ReduxStoreType} from "./redux/redux-store";



type AppPropsType = {
    state: ReduxStoreType
    dispatch: (action: ActionsTypes) => void

}

function App(props: AppPropsType) {
    return (

        <div>
            <div className={styles.appWrapper}>
                <Head/>
                <NavBar/>
                <div className={styles.appWrapperContent}>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogPage={props.state.dialogsReducer}
                               dispatch={props.dispatch}
                           />
                           }/>
                    <Route path='/profile'
                           component={() =>
                               <Profile
                                   profilePage={props.state.profileReducer}
                                   dispatch={props.dispatch}/>
                           }/>
                </div>
            </div>
        </div>

    );
}

export default App;
