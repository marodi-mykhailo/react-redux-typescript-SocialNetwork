import React from 'react';
import {Field, reduxForm} from "redux-form";

const MessageForm = (props: any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Enter message'} name={'newMessage'} component={'textarea'}/>
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
