import React from "react";
import styles from "../Profile/Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import {ProfileInfoType} from "../../redux/profileReducer";

type profilePropsType = {
    profileInfo: ProfileInfoType
    updateStatus: (status: string) => void
    status: string
}

const Profile = (props: profilePropsType) => {
    return (
        <div className={styles.contentWrapper}>
            <ProfileInfo profileInfo={props.profileInfo} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;
