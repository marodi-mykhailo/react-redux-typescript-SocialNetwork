import React from "react";
import styles from "../Profile/Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import {ProfileInfoType} from "../../redux/profileReducer";
import SubscribersBox from "./SubscriberBox/SubscribersBox";
import ProfileImg from "./ProfileImg/ProfileImg";
import ProfilePhotos from "./ProfilePhotos/ProfilePhotos";

type profilePropsType = {
    profileInfo: ProfileInfoType
    updateStatus: (status: string) => void
    status: string
}

const Profile = (props: profilePropsType) => {
    return (
        <div className={styles.contentWrapper}>
            <div className={styles.left}>
                    <ProfileImg photo={props.profileInfo.photos}/>
                    <SubscribersBox/>

            </div>
            <div className={styles.right}>
                <ProfileInfo profileInfo={props.profileInfo} status={props.status} updateStatus={props.updateStatus}/>
                <ProfilePhotos/>
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile;
