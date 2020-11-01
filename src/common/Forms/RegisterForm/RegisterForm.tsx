import React, {useState} from 'react';
import avatar from "../../../assets/images/avatar.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import {faEnvelope, faExclamationCircle, faLock} from "@fortawesome/free-solid-svg-icons";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';


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
    username: Yup.string().required(),
    email: Yup.string().email().required(),
    password: Yup.string().min(6).max(8).required(),
    password2: Yup.string().oneOf([Yup.ref('password'), '']).required()
})


const onSubmit = (values: InitialValuesFormikType) => {
    console.log(values)
}

const RegisterForm = () => {

    const [focus, setFocus] = useState<any>({
        username: false,
        email: false,
        password: false,
        password2: false
    })
    const [value, setValue] = useState<any>({
        username: '',
        email: '',
        password: '',
        password2: ''
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

    return (
        <Formik initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}>
            <Form id="reg__form">
                <img src={avatar}/>
                <h2 className="title">Waiting for you</h2>
                <div className={(focus.username || !!value.username) ? "input-div one focus" : "input-div one"}>
                    <div className="i">
                        <FontAwesomeIcon icon={faUser}/>
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

                <div className={(focus.email || !!value.email) ? "input-div one focus" : "input-div one"}>
                    <div className="i">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </div>
                    <div className={"div error"}>
                        <h5>Mail</h5>
                        <Field type="email"
                               className="input"
                               name="email"
                               onFocus={onFocusHandler}
                               onBlur={onBlurHandler}
                        />
                        <FontAwesomeIcon className="fas fa-check-circle" icon={faCheckCircle}/>
                        <FontAwesomeIcon className="fas fa-exclamation-circle" icon={faExclamationCircle}/>
                        <ErrorMessage name='email'>{
                            errorMessage => <span className={'reg__error'}>{errorMessage}</span>
                        }</ErrorMessage>
                    </div>
                </div>

                <div className={(focus.password || !!value.password) ? "input-div pass focus" : "input-div pass"}>
                    <div className="i">
                        <FontAwesomeIcon icon={faLock}/>
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
                <div className={(focus.password2 || !!value.password2) ? "input-div pass focus" : "input-div pass"}>
                    <div className="i">
                        <FontAwesomeIcon icon={faLock}/>
                    </div>
                    <div className="div error">
                        <h5>Password check</h5>
                        <Field type="password"
                               className="input"
                               name="password2"
                               onFocus={onFocusHandler}
                               onBlur={onBlurHandler}
                        />
                        <FontAwesomeIcon className="fas fa-check-circle" icon={faCheckCircle}/>
                        <FontAwesomeIcon className="fas fa-exclamation-circle" icon={faExclamationCircle}/>
                        <ErrorMessage name='password2'>{
                            errorMessage => <span className={'reg__error'}>{errorMessage}</span>
                        }</ErrorMessage>
                    </div>

                </div>
                <button onClick={() => {
                }} type="submit" className="btn">Submit
                </button>
            </Form>
        </Formik>
    );
};


export default RegisterForm;
