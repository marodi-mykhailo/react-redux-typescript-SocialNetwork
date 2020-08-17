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
    addPost: () => void
    updateNewPostText: (newText:string) => void
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
                               dialogPage={props.state.dialogsPage}
                           />
                           }/>
                    <Route path='/profile'
                           component={() =>
                               <Profile
                                   profilePage={props.state.profilePage}
                                   updateNewPostText = {props.updateNewPostText}
                                   addPost={props.addPost}/>
                           }/>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
