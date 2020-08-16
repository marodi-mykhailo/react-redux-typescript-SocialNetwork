import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    const post = [
        {id: '1', message: 'Hi, how are you?', likesCount: 5},
        {id: '2', message: 'I love React.js', likesCount: 300},
    ]

    let postsElements = post.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

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
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
