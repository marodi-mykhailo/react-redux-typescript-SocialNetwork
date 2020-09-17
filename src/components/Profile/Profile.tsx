import React from "react";
import styles from "../Profile/Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, profilePageType} from "../../redux/store";

type profilePropsType = {
    profilePage: profilePageType
    dispatch: (action: ActionsTypes) => void
}

const Profile = (props: profilePropsType) => {
    return (
        <div className={styles.contentWrapper}>
            <ProfileInfo/>
            <MyPosts post={props.profilePage.post}
                     newPostText = {props.profilePage.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;
