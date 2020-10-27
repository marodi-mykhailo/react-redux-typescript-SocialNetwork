import React from 'react';
import s from "../DialogsSearchForm/DialogsSearchForm.module.css"
import {maxLengthCreator, required} from "../../validators/validators";
import {Field, reduxForm} from "redux-form";
import {Input, TextArea} from "../../CustomsFormsComponents/CustomsFormsComponents";
import {Simulate} from "react-dom/test-utils";

const maxLength50 = maxLengthCreator(50);

const DialogsSearchForm = () => {
        return (
            <form onChange={()=>{}} className={s.form}>
                    <Field className={s.field} placeholder={'Find...'}
                           validate={[maxLength50]} name={'dialogsSearch'}
                           component={Input}/>
            </form>
        );
    };


export const DialogsSearchReduxForm = reduxForm({
    form: 'DialogsSearch'
})(DialogsSearchForm)

export default DialogsSearchForm;
