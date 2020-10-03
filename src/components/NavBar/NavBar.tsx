import React from "react";
import s from './NavBar.module.css'
import {NavLink, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUserProfile} from "../../redux/profileReducer";

const NavBar = () => {
    let dispatch = useDispatch();
    let myId = useSelector<AppStateType, number|null>(state => state.auth.id)
    const onProfileClick = (myId:any) =>{
        debugger
        if(myId === null){
           return <Redirect to={'/login'}/>
        }
        dispatch(getUserProfile(myId.toString()))
    }
    return (

            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to={`/profile/${myId}`} onClick={()=>onProfileClick(myId)} activeClassName={s.activeLink}>Profile</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/dialogs" activeClassName={s.activeLink}>Messages</NavLink>
                </div>
                <div className={`${s.item} ${s.active}`}>
                    <NavLink to="/users" activeClassName={s.activeLink}>Users</NavLink>
                </div>

                <div className={s.item}>
                    <a>News</a>
                </div>
                <div className={s.item}>
                    <a>Music</a>
                </div>
                <div className={s.item}>
                    <a>Settings</a>
                </div>
            </nav>

    )
}

export default NavBar;
