import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {ActionsUsersTypes, followAC, initialUsersStateType, unFollowAC} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";

const mapStateToProps = (state: AppStateType) => {
    return {
        userData: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: (action: ActionsUsersTypes) => void) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        }
    }
}

export const UsersContainer: any = connect(mapStateToProps, mapDispatchToProps)(Users)
