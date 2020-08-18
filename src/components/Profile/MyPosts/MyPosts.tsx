import React, {ChangeEvent, RefObject} from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postType} from "../../../redux/state";

type myPostsPropsType = {
    post: Array<postType>
    newPostText: string
    dispatch: any
}

const MyPosts = (props: myPostsPropsType) => {

    const postsElements =
        props.post.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    const addPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        props.dispatch({
            type: 'UPDATE-POST-TEXT',
            newText: e.currentTarget.value
        })

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
