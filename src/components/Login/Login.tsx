import React from 'react';
import styles from './Login.module.css'
import {FormDataType, LoginReduxForm} from "../../common/Forms/LoginForm/LoginForm";


const Login = (props: any) => {
    console.log("render Login")
    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};


export default Login;
