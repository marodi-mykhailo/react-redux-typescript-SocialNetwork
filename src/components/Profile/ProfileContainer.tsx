import React from 'react';
import {connect} from "react-redux";
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {
    getProfile, getStatus,
    ProfileInfoType,
    setProfile,
    setProfileIsFetching, setStatus, updateStatus
} from "../../redux/profileReducer";
import Preloader from "../../common/Preloader";
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux"

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
    status: string
    myId: number | null
}

type MapDispatchToProps = {
    setProfile: (profileInfo: any) => void
    setProfileIsFetching: (isFetching: boolean) => void
    getProfile: (userId: string) => void
    getStatus: (status: string) => void
    updateStatus: (status: string) => void
}

type OwnPropsType = MapStateToPropsType & MapDispatchToProps
type ProfileContainerPropsType = RouteComponentProps<PathParamType> & OwnPropsType

class ProfileContainer extends React.Component<ProfileContainerPropsType> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId){
            if(this.props.myId != null){
                userId = this.props.myId.toString()
            }
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ? <Preloader/>
                        : <Profile profileInfo={this.props.profileInfo} status={this.props.status} updateStatus={this.props.updateStatus}/>
                }
            </>

        );
    }
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profileInfo: state.profilePage.profileInfo,
        isFetching: state.profilePage.isFetching,
        status: state.profilePage.status,
        myId: state.auth.id
    }
}

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {setProfile, setProfileIsFetching, getProfile, getStatus, updateStatus})
)(ProfileContainer)



