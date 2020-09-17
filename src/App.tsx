import React from 'react';
import styles from './App.module.css'
import Head from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {ReduxStoreType} from "./redux/redux-store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


type AppPropsType = {
    store: any
}

function App(props: AppPropsType) {
    return (

        <div>
            <div className={styles.appWrapper}>
                <Head/>
                <NavBar/>
                <div className={styles.appWrapperContent}>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer
                               store={props.store}
                           />
                           }/>
                    <Route path='/profile'
                           component={() =>
                               <Profile
                                   store={props.store}/>
                           }/>
                </div>
            </div>
        </div>

    );
}

export default App;
