import React, {ChangeEvent, RefObject} from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postType} from "../../../redux/state";

type myPostsPropsType = {
    post: Array<postType>
    newPostText: string
    addPost: () => void
    updateNewPostText: (newText: string) => void
}

const MyPosts = (props: myPostsPropsType) => {
    let postsElements =
        props.post.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    let addPost = () => {
        props.addPost();
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)

    }

    return (
        <div className={styles.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea  onChange={onPostChange} value={props.newPostText}/>
                </div>
                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
