import MyPosts from "./MyPosts";
import {ActionsProfileTypes, addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
    return {
        postData: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsProfileTypes) => void) => {
    return {
        onAddPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

const MyPostsContainer: any = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer;
