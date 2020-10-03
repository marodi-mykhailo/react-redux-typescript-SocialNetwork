import React from 'react';
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";
import {Redirect} from 'react-router-dom';

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth
})

export const withAuthRedirect = (Component: any) => {
    const RedirectComponent = (props: any) => {
        if(!props.isAuth) return <Redirect to={'/login'}/>
        return <Component {...props}/>
    }
    return connect(mapStateToProps)(RedirectComponent);
};
