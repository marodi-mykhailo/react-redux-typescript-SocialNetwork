import {RegisterFormDataType} from "../Forms/RegisterForm/RegisterForm";

export const required = (value: string) => {
    if(value){
        return undefined
    }else {
        return 'Required'
    }
}

export const maxLengthCreator = (maxLength:number) => (value:string) =>{
    if(value){
        if(value.length>maxLength){
            return `Max length is more ${maxLength}`
        }else {
            return undefined
        }
    }

}

export const validate = (values: RegisterFormDataType) => {
    const errors: any = {}
    if (!values.username) {
        errors.username = 'Required'
    } else if (values.username.length > 15) {
        errors.username = 'Must be 15 characters or less'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password !== values.password2) {
        errors.password2 = 'Passwords must be the same'
    }
    return errors
}
