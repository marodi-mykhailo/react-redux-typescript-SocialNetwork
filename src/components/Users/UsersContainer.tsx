import React from "react";
import {connect} from "react-redux";
import {ActionsUsersTypes, followAC, initialUsersStateType, setUsersAC, unFollowAC} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";

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
        },
        setUsers: (usersData: any) => {
            dispatch(setUsersAC(usersData))
        }
    }
}

export const UsersContainer: any = connect(mapStateToProps, mapDispatchToProps)(Users)
