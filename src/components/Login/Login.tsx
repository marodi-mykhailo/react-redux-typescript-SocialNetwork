import React from 'react';
import styles from './Login.module.css'
import {FormDataType, LoginReduxForm} from "../../common/Forms/LoginForm/LoginForm";
import {login} from "../../redux/authReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import { Redirect } from 'react-router-dom';


const Login = (props: any) => {
    console.log("render Login")
    const onSubmit = (formData: FormDataType) => {
        props.login(formData)
    }
    return (
        <div>
            {props.isAuth && <Redirect to="/profile" />}
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const mapStateToProps = (state: AppStateType) =>({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);
