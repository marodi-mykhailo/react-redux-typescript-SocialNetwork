import React from 'react';
import styles from './App.module.css'
import Head from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

type AppPropsType = {}

function App(props: AppPropsType) {
    return (

        <div>
            <div className={styles.appWrapper}>
                <Head/>
                <NavBar/>
                <div className={styles.appWrapperContent}>
                    <Route path='/dialogs'
                           render={() =>
                               <DialogsContainer/>
                           }/>
                    <Route path='/profile'
                           render={() =>
                               <Profile/>
                           }/>
                    <Route path='/users'
                           render={() =>
                               <UsersContainer/>
                           }/>
                </div>
            </div>
        </div>

    );
}

export default App;
