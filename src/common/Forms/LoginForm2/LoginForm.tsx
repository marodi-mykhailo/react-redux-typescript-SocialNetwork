import React, {useState} from 'react';
import avatar from "../../../assets/images/avatar.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import {faEnvelope, faExclamationCircle, faLock} from "@fortawesome/free-solid-svg-icons";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../../redux/authReducer";
import {AppStateType} from "../../../redux/redux-store";
import {Redirect} from 'react-router-dom';


export type RegisterFormDataType = {
    username: string
    email: string
    password: string
    password2: string

}

type InitialValuesFormikType = {
    username: string
    email: string
    password: string
    password2: string
}

const initialValues = {
    username: '',
    email: '',
    password: '',
    password2: ''
}

const validationSchema = Yup.object({
    username: Yup.string().min(4, 'Too short').max(25, 'Too long').required('required'),
    password: Yup.string().min(6).max(8).required(),
})

const LoginForm = () => {

    const dispatch = useDispatch()

    const [focus, setFocus] = useState<any>({
        username: false,
        password: false,
    })
    const [value, setValue] = useState<any>({
        username: '',
    })

    const onFocusHandler = (e: any) => {
        setFocus({
            ...focus,
            [e.currentTarget.name]: true

        })
    }

    const onBlurHandler = (e: any) => {
        setFocus({
            ...focus,
            [e.currentTarget.name]: false
        })
        setValue({
            ...value,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    const onSubmit = (values: InitialValuesFormikType) => {

    }
    // const isRegister = useSelector<AppStateType, boolean>(state => state.auth2.isRegister)
    //
    // if (isRegister) {
    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            <div className={'login-content'}>
                <Form id="reg__form">
                    <img src={avatar}/>
                    <h2 className="title">Welcome</h2>
                    <div className={(focus.username || !!value.username) ? "input-div one focus" : "input-div one"}>
                        <div className="i">
                            <FontAwesomeIcon className={'fas'} icon={faUser}/>
                        </div>
                        <div className="div">
                            <h5>Username</h5>
                            <Field type="text"
                                   className="input"
                                   name="username"
                                   onFocus={onFocusHandler}
                                   onBlur={onBlurHandler}
                            />
                            <FontAwesomeIcon className="fas fa-check-circle" icon={faCheckCircle}/>
                            <FontAwesomeIcon className="fas fa-exclamation-circle" icon={faExclamationCircle}/>
                            <ErrorMessage name='username'>{
                                errorMessage => <span className={'reg__error'}>{errorMessage}</span>
                            }</ErrorMessage>
                        </div>
                    </div>

                    <div className={(focus.password || !!value.password) ? "input-div pass focus" : "input-div pass"}>
                        <div className="i">
                            <FontAwesomeIcon className={'fas'} icon={faLock}/>
                        </div>
                        <div className="div">
                            <h5>Password</h5>
                            <Field type="password"
                                   className="input"
                                   name="password"
                                   onFocus={onFocusHandler}
                                   onBlur={onBlurHandler}
                            />
                            <FontAwesomeIcon className="fas fa-check-circle" icon={faCheckCircle}/>
                            <FontAwesomeIcon className="fas fa-exclamation-circle" icon={faExclamationCircle}/>
                            <ErrorMessage name='password'>{
                                errorMessage => <span className={'reg__error'}>{errorMessage}</span>
                            }</ErrorMessage>
                        </div>
                    </div>
                    <a href="#">Forgot Password?</a>
                    <button type="submit" className="btn">Submit</button>
                    <button className={'btn'} onClick={()=>{
                        return <Redirect to={'/register'}/>
                    }}>Registration</button>
                </Form>
            </div>
        </Formik>
    );
};


export default LoginForm;
