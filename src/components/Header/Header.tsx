import React from "react";
import styles from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../assets/images/logo.png'
import SearchIcon from '@material-ui/icons/Search';
import {Badge, IconButton} from "@material-ui/core";
import NotificationsIcon from '@material-ui/icons/Notifications';
import {blue, red} from "@material-ui/core/colors";


type headerPropsType = {
    userLogin: string | null
    isAuth: boolean
    logOut: () => void
}

const Header = (props: headerPropsType) => {
    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
                <div className={styles.logo}>
                    <img src={logo} alt={'logo'}/>
                </div>
                <div className={styles.container}>
                    <div className={styles.input}>
                        <SearchIcon/>
                        <input placeholder={'Search...'}/>
                    </div>

                    <div className={styles.rightContainer}>

                        {props.isAuth
                            ? <div className={styles.authWrapper}>
                                <div className={styles.notificationWrapper}>
                                    <Badge badgeContent={17} color="secondary">
                                        <NotificationsIcon style={{color: blue[900]}}/>
                                    </Badge>
                                </div>
                                <div className={styles.user}>
                                    <div className={styles.auth}><span>{props.userLogin}</span></div>
                                    <div className={styles.userSmallImg}>
                                        <img
                                            src={'https://sun9-42.userapi.com/impf/c831408/v831408474/91aa5/I-OncWO9EOs.jpg?size=400x0&quality=90&crop=0,0,1080,1920&sign=7bab616252e4df3cc62fad47c26c8709&ava=1'}/>
                                    </div>
                                </div>
                                <div className={styles.logOut} onClick={props.logOut}>LogOut</div>
                            </div>
                            : <NavLink to={'/login'}>
                                <div className={styles.auth}>Login</div>
                            </NavLink>
                        }
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;
