import React from 'react';
import s from '../MessageSearch/MessageSearch.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit, faSearch} from "@fortawesome/free-solid-svg-icons";
import {Input} from "../../../common/CustomsFormsComponents/CustomsFormsComponents";
import {Simulate} from "react-dom/test-utils";
import {DialogsSearchReduxForm} from "../../../common/Forms/DialogsSearchForm/DialogsSearchForm";

const MessageSearch = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.searchBox}>
                <div className={s.iconBoxSearch}>
                    <FontAwesomeIcon icon={faSearch}/>
                </div>
                <div className={s.inputBox}>
                    <DialogsSearchReduxForm/>
                </div>
            </div>
            <div className={s.iconBoxWrite}>
                <FontAwesomeIcon icon={faEdit}/>
            </div>

        </div>
    );
};

export default MessageSearch;
