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
}

function App(props: AppPropsType) {

    return (

        <BrowserRouter>
            <div className={styles.appWrapper}>
                <Head/>
                <NavBar/>
                <div className={styles.appWrapperContent}>
                    <Route path='/dialogs'
                           render={() => <Dialogs
                               state={props.state.dialogsPage}
                           />
                           }/>
                    <Route path='/profile'
                           component={() =>
                               <Profile
                                   state={props.state.profilePage}/>
                           }/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
