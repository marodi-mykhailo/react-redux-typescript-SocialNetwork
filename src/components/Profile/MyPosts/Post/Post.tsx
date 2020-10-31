import React, {useState} from "react";
import styles from "./Post.module.css";
import {Paper} from "@material-ui/core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {faChevronDown, faHeart as faHeartLiked} from "@fortawesome/free-solid-svg-icons";

type PostPropsType = {
    message: string
    likesCount: number
}


const Post = (props: PostPropsType) => {
    const [toggleSettings, setToggleSettings] = useState(false)

    return (
        <Paper elevation={3} className={styles.wrapper}>
            <div className={styles.box}>
                <div className={styles.item}>
                    <div className={styles.userWrapper}>
                        <div className={styles.userBox}>
                            <img className={styles.profileImg}
                                 src={'https://www.bemanistyle.com/wp-content/uploads/2018/01/Linux-Avatar-300px.png'}
                                 alt={''}/>
                            <div className={styles.userInfo}>
                                <div className={styles.name}>Mykhailo <span>Marodi</span></div>
                                <span className={styles.online}>1 hours ago</span>
                            </div>
                        </div>
                        <div className={styles.settingsWrapper} onMouseOver={() => setToggleSettings(true)}
                             onMouseOut={() => setToggleSettings(false)}>
                            <FontAwesomeIcon className={styles.settingsBtn} icon={faChevronDown}/>
                            <Paper elevation={6}>
                                <div  className={toggleSettings ? styles.settingsBox : `${styles.settingsBox}  ${styles.displayNone}`}>
                                    <ul className={styles.settingsItems}>
                                        <li>Edit</li>
                                        <li>Delete</li>
                                    </ul>
                                </div>
                            </Paper>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <p className={styles.postText}>{props.message}</p>
                        {true && <img className={styles.postImg}
                                      src={'https://sun9-8.userapi.com/c637818/v637818498/32ddf/Nh7bj6U8Z9g.jpg'}
                                      alt={''}/>}
                    </div>
                    <span className={styles.likes}><FontAwesomeIcon className={styles.likeBtn}
                                                                    icon={true ? faHeart : faHeartLiked}/>{props.likesCount}</span>
                </div>
            </div>
        </Paper>
    )
}

export default Post;
