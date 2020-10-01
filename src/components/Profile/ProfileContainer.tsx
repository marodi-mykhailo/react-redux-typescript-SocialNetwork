import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {ProfileInfoType, setProfile, setProfileIsFetching} from "../../redux/profileReducer";
import Preloader from "../../common/Preloader";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {profileAPI} from "../../redux/api";

type ProfileContainerType = {
    setProfile: (profileInfo: any) => void
    profileInfo: ProfileInfoType
    isFetching: boolean
    setProfileIsFetching: (isFetching: boolean) => void
}
type PathParamType = {
    userId: string
}

type MapStateToPropsType = {
    profileInfo: ProfileInfoType
    isFetching:boolean
}

type MapDispatchToProps = {
    setProfile: (profileInfo: any) => void
    setProfileIsFetching: (isFetching: boolean) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToProps
type ProfileContainerPropsType = RouteComponentProps<PathParamType> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.setProfileIsFetching(true)
        profileAPI.getUserProfile(userId).then(response => {
            this.props.setProfile(response.data)
            this.props.setProfileIsFetching(false)
        })
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ? <Preloader/>
                        : <Profile profileInfo={this.props.profileInfo}/>
                }
            </>

        );
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profileInfo: state.profilePage.profileInfo,
        isFetching: state.profilePage.isFetching
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setProfile, setProfileIsFetching})(WithUrlDataContainerComponent)

