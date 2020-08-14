import React from "react";
import styles from "../Profile/Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return(
        <div className={styles.contentWrapper}>
            <div>
                <div>
                    <img className={styles.profImg} src='https://upload.wikimedia.org/wikipedia/commons/0/07/%D0%A6%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D1%87%D0%B0%D1%81%D1%82%D1%8C_%D1%83%D1%80%D0%BE%D1%87%D0%B8%D1%89%D0%B0_%D0%A8%D0%B8%D1%80%D0%BE%D0%BA%D0%B0%D1%8F_%D0%91%D0%B0%D0%BB%D0%BA%D0%B0.jpg'/>
                </div>
                <div>
                    ava + desc
                </div>
                <MyPosts/>
            </div>
        </div>
    )
}

export default Profile;
