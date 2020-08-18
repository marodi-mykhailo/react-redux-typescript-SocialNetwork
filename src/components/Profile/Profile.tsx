import React from "react";
import styles from "../Profile/Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

type profilePropsType = {
    profilePage: profilePageType
    dispatch: any
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
