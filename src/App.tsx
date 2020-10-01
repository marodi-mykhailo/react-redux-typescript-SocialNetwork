import React from 'react';
import styles from './App.module.css'
import NavBar from "./components/NavBar/NavBar";
import {Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

type AppPropsType = {}

function App(props: AppPropsType) {
    return (

        <div>
            <div className={styles.appWrapper}>
                <HeaderContainer/>
                <NavBar/>
                <div className={styles.appWrapperContent}>
                    <Route path='/dialogs'
                           render={() =>
                               <DialogsContainer/>
                           }/>
                    <Route path='/profile/:userId?'
                           render={() =>
                               <ProfileContainer/>
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
