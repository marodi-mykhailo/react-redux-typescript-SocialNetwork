import React, {useEffect} from 'react';
import styles from './CustomsFormsComponents.module.css'

type CustomsFormsComponentsPropsType = {
    input: any
    meta: any
    type: string
    setError: (error: boolean) => void
}


export const TextArea = ({input, meta, ...props}: CustomsFormsComponentsPropsType) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
            <textarea{...input}{...props}/>
            <div>{hasError && <span>{meta.error}</span>}</div>
        </div>
    );
};


export const Input = ({input, meta, ...props}: CustomsFormsComponentsPropsType) => {
    const hasError = meta.error && meta.touched
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : " ")}>
            <input className={styles.input} {...input}{...props}/>
            <div>{hasError && <span>{meta.error}</span>}</div>
        </div>
    );
};

export const RegisterInput = ({input, type, meta: {touched, error}, setError}: CustomsFormsComponentsPropsType) => {
    return(
        <> <input {...input} type={type}/>
            {touched && error && <span>{error}</span>}
        </>
    )
}



