import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postType} from "../../../redux/state";

type myPostsPropsType = {
    post: Array<postType>
}

const MyPosts = (props: myPostsPropsType) => {



    let postsElements = props.post.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

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
