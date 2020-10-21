import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../validators/validators";
import {Input, TextArea} from "../../CustomsFormsComponents/CustomsFormsComponents";
import {Photoczka} from "../../../components/Profile/ProfileImg/ProfileImg";
import s from './AddNewPostForm.module.css'

type AddNewPostFormDataType = {
    newPostText: string
}

type AddNewPostFormPropsType = {
    addPost: (newPostText: string) => void
}

const maxLength50 = maxLengthCreator(50)

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormDataType>> = (props) => {
    return (
        <form className={s.form} onSubmit={props.handleSubmit}>
            <div className={s.fieldWrap}>
                <img src={Photoczka} alt={''}/>
                <Field name={'newPostText'}
                       className={s.field}
                       validate={[]}
                       placeholder={'Write Post'}
                       component={Input}/>
                <button className={s.btn}>Add post</button>
            </div>
        </form>
    );
};

export const AddNewPostReduxForm = reduxForm<AddNewPostFormDataType>({
    form: 'AddNewPostForm'
})(AddNewPostForm)

export default AddNewPostForm;
