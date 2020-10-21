import MyPosts from "./MyPosts";
import {addPost} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {reset} from "redux-form";

const mapStateToProps = (state: AppStateType) => {
    return {
        postData: state.profilePage
    }
}

const MyPostsContainer: any = connect(mapStateToProps, {addPost, reset})(MyPosts);


export default MyPostsContainer;
