import {InjectedFormProps, reduxForm, Field} from "redux-form";
import React from "react";
import {Input} from "../../CustomsFormsComponents/CustomsFormsComponents";
import {maxLengthCreator, required} from "../../validators/validators";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

const maxLength30 = maxLengthCreator(30);
const maxLength12 = maxLengthCreator(12);

const LoginForm:React.FC<InjectedFormProps<FormDataType>> = (props: any) => {
    console.log('render LoginForm')
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'email'} validate={[required, maxLength30]} name={'email'} component={Input}/>
                </div>
                <div>
                    <Field placeholder={'password'} validate={[required, maxLength12]} name={'password'} component={Input}
                           type={'password'}/>
                </div>
                <div>
                    <Field type={'checkbox'} name={'rememberMe'} component={Input}/> remember Me
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
