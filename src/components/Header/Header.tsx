import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";

type headerPropsType = {
    userLogin: string | null
    isAuth: boolean
    logOut: () => void
}

const Header = (props: headerPropsType) => {
    return (
        <header className={styles.header}>
            <h1>hello</h1>

            {props.isAuth
                ? <div>
                    <div className={styles.auth}>{props.userLogin}</div>
                    <div onClick={props.logOut}>LogOut</div>
                </div>
                : <NavLink to={'/login'}>
                    <div className={styles.auth}>Login</div>
                </NavLink>
            }

        </header>
    )
}

export default Header;
