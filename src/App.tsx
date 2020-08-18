import React from 'react';
import styles from './App.module.css'
import Head from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {RootStateType} from "./redux/state";


type AppPropsType = {
    state: RootStateType
    dispatch: any

}

function App(props: AppPropsType) {
debugger
    return (

        <BrowserRouter>
            <div className={styles.appWrapper}>
                <Head/>
                <NavBar/>
                <div className={styles.appWrapperContent}>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               dialogPage={props.state.dialogsPage}
                           />
                           }/>
                    <Route path='/profile'
                           component={() =>
                               <Profile
                                   profilePage={props.state.profilePage}
                                   dispatch={props.dispatch}/>
                           }/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
