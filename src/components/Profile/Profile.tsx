import React from "react";
import styles from "../Profile/Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    return (
        <div className={styles.contentWrapper}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    )
}

export default Profile;
