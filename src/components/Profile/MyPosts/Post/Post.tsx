import React from "react";
import styles from "./Post.module.css";

type PostPropsType = {
    message: string
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
        <div>
            <div>
                <div className={styles.item}>
                    <img className={styles.profileImg}  src={'https://www.bemanistyle.com/wp-content/uploads/2018/01/Linux-Avatar-300px.png'} alt={''}/>
                    <p>{props.message}</p>
                    <span>{props.likesCount} likes</span>
                </div>
            </div>
        </div>
    )
}

export default Post;
