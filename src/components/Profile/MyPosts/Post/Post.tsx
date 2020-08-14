import React from "react";
import styles from "./Post.module.css";

const Post = () => {
    return (
        <div>
            <div>
                <div className={styles.item}>
                    <img className={styles.profileImg}  src={'https://www.bemanistyle.com/wp-content/uploads/2018/01/Linux-Avatar-300px.png'}/>
                    Post 1
                </div>
            </div>
        </div>
    )
}

export default Post;
