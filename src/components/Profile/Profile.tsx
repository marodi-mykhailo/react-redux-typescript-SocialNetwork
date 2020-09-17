import React from "react";
import styles from "../Profile/Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";

type profilePropsType = {
   store: any
}

const Profile = (props: profilePropsType) => {
    return (
        <div className={styles.contentWrapper}>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile;
