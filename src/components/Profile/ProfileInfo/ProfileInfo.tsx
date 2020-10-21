import React from "react";
import styles from "../ProfileInfo/ProfileInfo.module.css";
import {ProfileInfoType} from "../../../redux/profileReducer";
import Preloader from "../../../common/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import {Paper} from "@material-ui/core";

type ProfileInfoComponentType = {
    profileInfo: ProfileInfoType
    updateStatus: (status: string) => void
    status: string
}

const ProfileInfo = (props: ProfileInfoComponentType) => {

    if (!props.profileInfo) {
        return <Preloader/>
    }
    return (
        <div className={styles.wrapper}>

            <Paper elevation={3} className={styles.infoBlock}>
                <div className={styles.headerInfo}>
                    <div className={styles.name}>Misha Marodi</div>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
                <div className={styles.descriptionBlock}>
                    <div className={styles.infoRow}>
                        <div className={styles.infoLeft}>Birthday:</div>
                        <div className={styles.infoRight}>10 April</div>
                    </div>
                    <div className={styles.infoRow}>
                        <div className={styles.infoLeft}>Work experience:</div>
                        <div className={styles.infoRight}>3 years</div>
                    </div>
                    <div className={styles.descriptionBtn}>Details</div>
                </div>
                <div className={styles.footer}>
                    <div className={styles.fBox}>
                        <span className={styles.count}>10030</span>
                        <span className={styles.fBoxText}>Friends</span>
                    </div>
                    <div className={styles.fBox}>
                        <span className={styles.count}>10030</span>
                        <span className={styles.fBoxText}>Friends</span>
                    </div>
                    <div className={styles.fBox}>
                        <span className={styles.count}>10030</span>
                        <span className={styles.fBoxText}>Friends</span>
                    </div>
                    <div className={styles.fBox}>
                        <span className={styles.count}>10030</span>
                        <span className={styles.fBoxText}>Friends</span>
                    </div>
                    <div className={styles.fBox}>
                        <span className={styles.count}>10030</span>
                        <span className={styles.fBoxText}>Friends</span>
                    </div>
                </div>
            </Paper>

        </div>
    )
}

export default ProfileInfo;
