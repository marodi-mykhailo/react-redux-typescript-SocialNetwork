import React, {ChangeEvent} from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

type myPostsPropsType = {
    postData: any
    onPostChange: (text:string) => void
    onAddPost: () => void
}


const MyPosts = (props: myPostsPropsType) => {
    const postsElements =
        props.postData.post.map((post: { message: string; likesCount: number; }) => <Post message={post.message} likesCount={post.likesCount}/>)

    const addPost = () => {
       props.onAddPost();
    }


    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
       props.onPostChange(e.currentTarget.value)

    }

    return (
        <div className={styles.postsBlock}>
            <h3>My Post</h3>
            <div>
                <div>
                    <textarea value={props.postData.newPostText} onChange={onPostChange} placeholder={'Write Post'}/>
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
