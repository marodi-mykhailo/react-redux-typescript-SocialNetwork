import {InjectedFormProps, reduxForm, Field} from "redux-form";
import React from "react";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    console.log('render LoginForm')
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'login'} name={'login'} component={'input'}/>
                </div>
                <div>
                    <Field placeholder={'password'} name={'password'} component={'input'}/>
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> remember Me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    )
}

export const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

export default LoginForm;
