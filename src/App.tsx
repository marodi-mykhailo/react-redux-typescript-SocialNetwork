import React from 'react';
import styles from './App.module.css'
import NavBar from "./components/NavBar/NavBar";
import {Route, withRouter} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect, useSelector} from "react-redux";
import {compose} from "redux"
import {initializeApp} from "./redux/appReducer";
import {AppStateType} from "./redux/redux-store";
import Preloader from "./common/Preloader";
import Auth from "./components/Auth/Auth";


type AppPropsType = {
    isInitialized: boolean
    initializeApp: () => void
}

class App extends React.Component<AppPropsType, any> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.isInitialized) {
            return <Preloader/>
        }



        return (
            <div>
                <Route path={'/register'}
                       render={() =>
                           <Auth isRegister={false}/>
                       }
                />
                <Route path={'/login'}
                       render={() =>
                           <Auth isRegister={true}/>
                       }
                />
                <div className={styles.appBg}>
                    <HeaderContainer/>
                    <div className={styles.appWrapper}>
                        <NavBar/>
                        <div className={styles.appWrapperContent}>
                            <Route path='/dialogs'
                                   render={() =>
                                       <DialogsContainer/>
                                   }
                            />
                            <Route path='/profile/:userId?'
                                   render={() =>
                                       <ProfileContainer/>
                                   }
                            />
                            <Route path='/users'
                                   render={() =>
                                       <UsersContainer/>
                                   }
                            />
                            {/*<Route path={'/login'}*/}
                            {/*       render={() => <Login/>*/}
                            {/*       }*/}
                            {/*/>*/}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isInitialized: state.app.initialized,
})

export default compose<any>(withRouter, connect(mapStateToProps, {initializeApp}))(App)
