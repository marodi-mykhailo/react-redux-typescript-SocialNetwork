import React from "react";
import {connect} from "react-redux";
import {
    follow, followThunkAC, getUsers, setCurrentPage,
    setUsers, toggleFollowingProgress,
    unFollow, unFollowThunkAC,
    usersType
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../../common/Preloader";
import {usersApi} from "../../redux/api";

type UsersContainerType = {
    users: Array<usersType>
    currentPage: number
    pageSize: number
    totalUsersCount: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (currentPage: number) => void
    isFetching: boolean
    followingInProgress: Array<any>
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
    followThunkAC: (userId: number) => void
    unFollowThunkAC: (userId: number) => void
}

class UsersContainer extends React.Component<UsersContainerType> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (currentPage: number) => {
        this.props.getUsers(currentPage, this.props.pageSize)
    }

    onFollow = (userId: number) => {
        this.props.followThunkAC(userId)
    }

    onUnFollow = (userId: number) => {
        this.props.unFollowThunkAC(userId)
    }

    render() {

        return (
            <>
                {this.props.isFetching
                    ? <Preloader/>
                    : <Users users={this.props.users}
                             totalUsersCount={this.props.totalUsersCount}
                             pageSize={this.props.pageSize}
                             currentPage={this.props.currentPage}
                             follow={this.onFollow}
                             unFollow={this.onUnFollow}
                             onPageChange={this.onPageChange}
                             followingInProgress={this.props.followingInProgress}
                    />
                }
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {
        users: state.usersPage.users,
        currentPage: state.usersPage.currentPage,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    getUsers,
    setCurrentPage,
    followThunkAC,
    unFollowThunkAC,
    toggleFollowingProgress
})(UsersContainer)
