import React from 'react';
import "../Auth/Auth.css"
import wave from "../../assets/images/wave.png";
import welcome from "../../assets/images/regWelcome.svg";
import loginPic from "../../assets/images/loginBigPic.svg"
import RegisterForm from "../../common/Forms/RegisterForm/RegisterForm";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import LoginForm from "../../common/Forms/LoginForm2/LoginForm";

type AuthPropsType={
    isRegister: boolean
}

const Auth = (props: AuthPropsType) => {
debugger
    return (
        <div className=''>
            <img className="wave" src={wave}/>
            <div className="container">
                <div className="img">
                    <img src={props.isRegister?loginPic : welcome}/>
                </div>
                <div className="login-content">
                    {props.isRegister ?  <LoginForm/> : <RegisterForm/>}
                </div>
            </div>
        </div>
    );
};

export default Auth;
