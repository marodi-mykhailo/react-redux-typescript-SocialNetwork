import React from 'react';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../validators/validators";
import {TextArea} from "../../CustomsFormsComponents/CustomsFormsComponents";

const maxLength50 = maxLengthCreator(50);

const MessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter message'} validate={[required, maxLength50]} name={'newMessage'} component={TextArea}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    );
};

export const MessageReduxForm = reduxForm({
    form: 'MessageForm'
})(MessageForm)

export default MessageForm;
