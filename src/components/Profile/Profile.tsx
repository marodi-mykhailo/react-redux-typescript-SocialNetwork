import React from "react";
import styles from "../Profile/Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import {ProfileInfoType} from "../../redux/profileReducer";

type profilePropsType = {
    profileInfo: ProfileInfoType
}

const Profile = (props: profilePropsType) => {
    return (
        <div className={styles.contentWrapper}>
            <ProfileInfo profileInfo={props.profileInfo}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
