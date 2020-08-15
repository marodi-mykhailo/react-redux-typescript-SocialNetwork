import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={styles.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={styles.posts}>
                <Post message={'Hi, how are you?'} likesCount={5}/>
                <Post message={'I love React.js'} likesCount={300}/>
            </div>
        </div>
    )
}

export default MyPosts;
