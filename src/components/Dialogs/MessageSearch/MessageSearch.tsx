import React from 'react';
import s from '../MessageSearch/MessageSearch.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {Input} from "../../../common/CustomsFormsComponents/CustomsFormsComponents";
import {Simulate} from "react-dom/test-utils";

const MessageSearch = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.iconBox}>
                <FontAwesomeIcon icon={faSearch}/>
            </div>
            <div className={s.inputBox}>

            </div>
        </div>
    );
};

export default MessageSearch;
