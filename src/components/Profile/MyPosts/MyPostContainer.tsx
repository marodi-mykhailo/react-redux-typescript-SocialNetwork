import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

type myPostsPropsType = {
    store: any
}


const MyPostsContainer = (props: myPostsPropsType) => {

   const postData = props.store.getState().profileReducer;

    const onAddPost = () => {
        props.store.dispatch(addPostActionCreator());
    }


    const onPostChange = (text:string) => {
        props.store.dispatch(updateNewPostTextActionCreator(text))

    }

    return (
       <MyPosts postData={postData}  postChange={onPostChange} addPost={onAddPost} />
    )
}

export default MyPostsContainer;
