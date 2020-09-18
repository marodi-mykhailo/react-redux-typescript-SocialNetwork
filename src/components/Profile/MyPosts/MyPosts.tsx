import React, {ChangeEvent} from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {postType} from "../../../redux/profileReducer";

type myPostsPropsType = {
    postData: any
    onPostChange: (text: string) => void
    onAddPost: () => void
}


const MyPosts = (props: myPostsPropsType) => {

    let newPostText = props.postData.newPostText

    const postsElements = props.postData.post.map(
        (post: postType, index: string) => (
            <Post key={index} message={post.message} likesCount={post.likesCount}/>
        )
    )

    const addPost = () => {
        props.onAddPost();
    }


    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.onPostChange(body)
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea value={newPostText}
                              onChange={onPostChange}
                              placeholder={'Write Post'}/>
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
