import React from "react";
import s from './NavBar.module.css'
import {NavLink, Redirect} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCalendarAlt, faCogs, faComments, faHouseUser, faUsers} from "@fortawesome/free-solid-svg-icons";
const NavBar = () => {

    return (

            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to={`/profile`}  activeClassName={s.activeLink}><FontAwesomeIcon icon={faHouseUser}/>Profile</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}><FontAwesomeIcon icon={faComments}/>Messages</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/users" activeClassName={s.activeLink}><FontAwesomeIcon icon={faUsers}/>Users</NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to="/calendar" activeClassName={s.activeLink}><FontAwesomeIcon icon={faCalendarAlt}/>Calendar</NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to={'/settings'} activeClassName={s.activeLink}><FontAwesomeIcon icon={faCogs}/>Settings</NavLink>
                </div>
            </nav>

    )
}

export default NavBar;
