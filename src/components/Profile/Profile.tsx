import React from "react";
import styles from "../Profile/Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

type profilePropsType = {
    profilePage: profilePageType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const Profile = (props: profilePropsType) => {
    return (
        <div className={styles.contentWrapper}>
            <ProfileInfo/>
            <MyPosts post={props.profilePage.post}
                     newPostText = {props.profilePage.newPostText}
                     updateNewPostText = {props.updateNewPostText}
                     addPost={props.addPost}/>
        </div>
    )
}

export default Profile;
