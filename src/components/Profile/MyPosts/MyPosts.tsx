import React, {ChangeEvent} from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ActionsTypes, addPostActionCreator, postType, updateNewPostTextActionCreator} from "../../../redux/state";

type myPostsPropsType = {
    post: Array<postType>
    newPostText: string
    dispatch: (action: ActionsTypes) => void
}



const MyPosts = (props: myPostsPropsType) => {

    const postsElements =
        props.post.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    const addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value))

    }

    return (
        <div className={styles.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.newPostText}/>
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
