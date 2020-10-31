import React, {useState} from 'react';
import avatar from "../../../assets/images/avatar.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import {faEnvelope, faExclamationCircle, faLock} from "@fortawesome/free-solid-svg-icons";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input, RegisterInput} from "../../CustomsFormsComponents/CustomsFormsComponents";
import {Simulate} from "react-dom/test-utils";
import {maxLengthCreator, required, validate} from "../../validators/validators";


const maxLength10 = maxLengthCreator(10)

export type RegisterFormDataType = {
    username: string
    email: string
    password: string
    password2: string

}


const RegisterForm: React.FC<InjectedFormProps<RegisterFormDataType>> = () => {
    const [focusU, setUFocus] = useState(false)
    const [focusE, setEFocus] = useState(false)
    const [focusP, setPFocus] = useState(false)
    const [focusP2, setP2Focus] = useState(false)
    const [error, setError] = useState(false)

    const setErrorHandler = (error: boolean)=>{
        setError(error)
    }

    return (
        <form id="reg__form">
            <img src={avatar}/>
            <h2 className="title">Waiting for you</h2>
            <div className={focusU ? "input-div one focus" : "input-div one"}>
                <div className="i">
                    <FontAwesomeIcon icon={faUser}/>
                </div>
                <div className="div">
                    <h5>Username</h5>
                    <Field type="text"
                           className="input"
                           name="username"
                           onFocus={() => setUFocus(true)}
                           onBlur={() => setUFocus(false)}
                           component={RegisterInput}/>
                    <FontAwesomeIcon className="fas fa-check-circle" icon={faCheckCircle}/>
                    <FontAwesomeIcon className="fas fa-exclamation-circle" icon={faExclamationCircle}/>
                    <small className="reg__error">Error message</small>
                </div>
            </div>

            <div className={focusE ? "input-div one focus" : "input-div one"}>
                <div className="i">
                    <FontAwesomeIcon icon={faEnvelope}/>
                </div>
                <div className={error? "div error": "div"}>
                    <h5>Mail</h5>
                    <Field type="email"
                           className="input"
                           name="email"
                           validate={[required, maxLength10]}
                           onFocus={() => setEFocus(true)}
                           onBlur={() => setEFocus(false)}
                           component={RegisterInput}/>
                    <FontAwesomeIcon className="fas fa-check-circle" icon={faCheckCircle}/>
                    <FontAwesomeIcon className="fas fa-exclamation-circle" icon={faExclamationCircle}/>
                    <small className="reg__error">Error message</small>
                </div>
            </div>

            <div className={focusP ? "input-div pass focus" : "input-div pass"}>
                <div className="i">
                    <FontAwesomeIcon icon={faLock}/>
                </div>
                <div className="div">
                    <h5>Password</h5>
                    <Field type="password"
                           className="input"
                           name="password"
                           onFocus={() => setPFocus(true)}
                           onBlur={() => setPFocus(false)}
                           setError={setErrorHandler}
                           component={RegisterInput}/>
                    <FontAwesomeIcon className="fas fa-check-circle" icon={faCheckCircle}/>
                    <FontAwesomeIcon className="fas fa-exclamation-circle" icon={faExclamationCircle}/>
                    <small className="reg__error">Error message</small>
                </div>

            </div>
            <div className={focusP2 ? "input-div pass focus" : "input-div pass"}>
                <div className="i">
                    <FontAwesomeIcon icon={faLock}/>
                </div>
                <div className="div error">
                    <h5>Password check</h5>
                    <Field type="password"
                           className="input"
                           name="password2"
                           onFocus={() => setP2Focus(true)}
                           onBlur={() => setP2Focus(false)}
                           component={RegisterInput}/>
                    <FontAwesomeIcon className="fas fa-check-circle" icon={faCheckCircle}/>
                    <FontAwesomeIcon className="fas fa-exclamation-circle" icon={faExclamationCircle}/>
                    <small className="reg__error">Error message</small>
                </div>

            </div>
            <button onClick={() => {
            }} type="submit" className="btn">Submit
            </button>
        </form>
    );
};

export const RegisterReduxForm = reduxForm<RegisterFormDataType>({
    form: "RegisterForm",
    validate
})(RegisterForm);
