import React from "react";
import {Field,InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../validators/validators";
import {TextArea} from "../../CustomsFormsComponents/CustomsFormsComponents";

type AddNewPostFormDataType = {
    newPostText: string
}

type AddNewPostFormPropsType = {
    addPost: (newPostText: string) => void
}

const maxLength10 = maxLengthCreator(10)

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormDataType> > = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} validate={[required, maxLength10]} placeholder={'Write Post'} component={TextArea}/>
            </div>
            <button>Add post</button>
            <button>Remove</button>
        </form>
    );
};

export const AddNewPostReduxForm = reduxForm<AddNewPostFormDataType>({
    form: 'AddNewPostForm'
})(AddNewPostForm)

export default AddNewPostForm;
