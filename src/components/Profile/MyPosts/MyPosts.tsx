import React, {ChangeEvent} from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/profileReducer";
import {AddNewPostReduxForm} from "../../../common/Forms/AddNewPostForm/AddNewPostForm";

type myPostsPropsType = {
    postData: any
    addPost: (newPostText: string) => void
}


const MyPosts = (props: myPostsPropsType) => {

    const postsElements = props.postData.post.map(
        (post: PostType, index: string) => (
            <Post key={index} message={post.message} likesCount={post.likesCount}/>
        )
    )

    const addPost = (values: any) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={styles.postsBlock}>
            <h3>My Post</h3>
            <AddNewPostReduxForm onSubmit={addPost}/>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;
