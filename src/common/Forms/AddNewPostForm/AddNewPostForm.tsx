import React from "react";
import {Field,InjectedFormProps, reduxForm} from "redux-form";

type AddNewPostFormDataType = {
    newPostText: string
}

type AddNewPostFormPropsType = {
    addPost: (newPostText: string) => void
}

const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormDataType> > = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newPostText'} placeholder={'Write Post'} component={'textarea'}/>
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
