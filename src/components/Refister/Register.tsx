import React, {useState} from 'react';
import wave from '../../assets/images/wave.png'
import welcome from '../../assets/images/regWelcome.svg'
import avatar from '../../assets/images/avatar.svg'
import './Register.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons/faUser";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons/faCheckCircle";
import {faEnvelope, faExclamationCircle, faLock} from "@fortawesome/free-solid-svg-icons";
import {RegisterReduxForm} from "../../common/Forms/RegisterForm/RegisterForm";

const Register = () => {

    return (
        <div className=''>
            <img className="wave" src={wave}/>
            <div className="container">
                <div className="img">
                    <img src={welcome}/>
                </div>
                <div className="login-content">
<RegisterReduxForm />
                </div>
            </div>
        </div>
    )
        ;
};

export default Register;
