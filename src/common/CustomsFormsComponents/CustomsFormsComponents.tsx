import React from 'react';
import styles from './CustomsFormsComponents.module.css'

type CustomsFormsComponentsPropsType = {
    input: any,
    meta: any
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

