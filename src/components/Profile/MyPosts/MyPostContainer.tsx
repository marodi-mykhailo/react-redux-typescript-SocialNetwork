import MyPosts from "./MyPosts";
import {ActionsProfileTypes, addPost, updateNewPostText} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
    return {
        postData: state.profilePage
    }
}

const MyPostsContainer: any = connect(mapStateToProps, { addPost, updateNewPostText})(MyPosts);


export default MyPostsContainer;
