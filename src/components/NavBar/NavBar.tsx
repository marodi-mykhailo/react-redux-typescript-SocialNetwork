import React from "react";
import s from './NavBar.module.css'
import {NavLink, Redirect} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarAlt, faCogs, faComments, faHouseUser, faUsers} from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {

    return (

            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to={`/profile`}  activeClassName={s.activeLink}><span><FontAwesomeIcon icon={faHouseUser}/>Profile</span></NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}><span><FontAwesomeIcon icon={faComments}/>Messages</span></NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/users" activeClassName={s.activeLink}><span><FontAwesomeIcon icon={faUsers}/>Users</span></NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to="/calendar" activeClassName={s.activeLink}><span><FontAwesomeIcon icon={faCalendarAlt}/>Calendar</span></NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to={'/settings'} activeClassName={s.activeLink}><span><FontAwesomeIcon icon={faCogs}/>Settings</span></NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to={'/register'} activeClassName={s.activeLink}><span><FontAwesomeIcon icon={faCogs}/>Register</span></NavLink>
                </div>
            </nav>

    )
}

export default NavBar;
