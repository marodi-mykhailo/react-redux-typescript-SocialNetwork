import React, {ChangeEvent} from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {PostType} from "../../../redux/profileReducer";
import {AddNewPostReduxForm} from "../../../common/Forms/AddNewPostForm/AddNewPostForm";
import {Paper} from "@material-ui/core";

type myPostsPropsType = {
    postData: any
    addPost: (newPostText: string) => void
    reset: (arg0: string) => void
}


const MyPosts = (props: myPostsPropsType) => {

    const postsElements = props.postData.post.map(
        (post: PostType, index: string) => (
            <Post key={index} message={post.message} likesCount={post.likesCount}/>
        )
    )

    const addPost = (values: any) => {
        props.addPost(values.newPostText);
        props.reset('AddNewPostForm')
    }

    return (
        <div className={styles.wrapper}>
            <Paper className={styles.addPostBox} elevation={3}>
                <AddNewPostReduxForm onSubmit={addPost}/>
            </Paper>


            <div className={styles.postsBlock}>
                <div className={styles.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;
