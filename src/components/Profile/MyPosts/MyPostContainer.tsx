import React from "react";
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import StoreContext from "../../../StoreContext";

type myPostsPropsType = {}


const MyPostsContainer = (props: myPostsPropsType) => {



    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const postData = store.getState().profilePage;

                    const onAddPost = () => {
                        store.dispatch(addPostActionCreator());
                    }


                    const onPostChange = (text: string) => {
                        store.dispatch(updateNewPostTextActionCreator(text))

                    }
                    return (
                        <MyPosts
                            postData={postData}
                            postChange={onPostChange}
                            addPost={onAddPost}/>
                    )

                }
            }
        </StoreContext.Consumer>

    )
}

export default MyPostsContainer;
