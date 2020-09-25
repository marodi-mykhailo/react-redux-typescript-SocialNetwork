import React from "react";
import styles from "../ProfileInfo/ProfileInfo.module.css";
import {ProfileInfoType} from "../../../redux/profileReducer";
import Preloader from "../../../common/Preloader";

type ProfileInfoComponentType = {
    profileInfo: ProfileInfoType
}

const ProfileInfo = (props: ProfileInfoComponentType) => {
    let obj = props.profileInfo.contacts
    const keys = Object.keys(obj)

    let contactsItems = keys.map(key =>
        <li key={key}>
            {key} - {obj[key]}
        </li>
    )
    return (
        <div>
            {!props.profileInfo
                ? <Preloader/>
                : <>
                    <div>
                        <img className={styles.profImg}
                             src={props.profileInfo.photos.large} alt={''}/>
                    </div>
                    <div className={styles.descriptionBlock}>
                        <h2>About me</h2>
                        <p>{props.profileInfo.aboutMe}</p>
                        <h2>Contacts</h2>
                        <ul>
                            {contactsItems}
                        </ul>
                    </div>
                </>
            }

        </div>
    )
}

export default ProfileInfo;
