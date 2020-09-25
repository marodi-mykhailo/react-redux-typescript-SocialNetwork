import React from 'react';
import axios from 'axios';
import {connect} from "react-redux";
import Profile from "./Profile";
import {AppStateType} from "../../redux/redux-store";
import {ProfileInfoType, setProfile, setProfileIsFetching} from "../../redux/profileReducer";
import Preloader from "../../common/Preloader";

type ProfileContainerType = {
    setProfile: (profileInfo: any) => void
    profileInfo: ProfileInfoType
    isFetching: boolean
    setProfileIsFetching: (isFetching: boolean) => void
}

class ProfileContainer extends React.Component<ProfileContainerType> {

    componentDidMount() {
        this.props.setProfileIsFetching(true)
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/8').then(response => {
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


const mapStateToProps = (state: AppStateType) => {
    return {
        profileInfo: state.profilePage.profileInfo,
        isFetching: state.profilePage.isFetching
    }
}


export default connect(mapStateToProps, {setProfile, setProfileIsFetching})(ProfileContainer)

