import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

type headerPropsType = {
    userLogin: string | null
    isAuth: boolean
}

const Header = (props: headerPropsType) => {
    return (
        <header className={styles.header}>
            <h1>hello</h1>

            {props.isAuth
                ? <div className={styles.auth}>{props.userLogin}</div>
                : <NavLink to={'/login'}>
                    <div className={styles.auth}>Login</div>
                </NavLink>
            }

        </header>
    )
}

export default Header;
