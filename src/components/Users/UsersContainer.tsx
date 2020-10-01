import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    unFollow,
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
    setUsers: (usersData: any) => void
    setTotalUsersCount: (totalUserCount: number) => void
    setCurrentPage: (currentPage: number) => void
    isFetching: boolean
    setIsFetching: (isFetching: boolean) => void
    followingInProgress: Array<any>
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

class UsersContainer extends React.Component<UsersContainerType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        usersApi.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.setUsers(response.data)
            this.props.setTotalUsersCount(response.data.totalCount)
            this.props.setIsFetching(false)
        })
    }

    onPageChange = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.setIsFetching(true)
        usersApi.getUsers(currentPage, this.props.pageSize).then(response => {
            this.props.setUsers(response.data)
            this.props.setIsFetching(false)
        })
    }

    onFollow = (userId: number) => {
        this.props.toggleFollowingProgress(true, userId)
        usersApi.onFollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.follow(userId)
                }
                this.props.toggleFollowingProgress(false, userId)
            })
    }

    onUnFollow = (userId: number) => {
        this.props.toggleFollowingProgress(true, userId)
        usersApi.onUnFollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.unFollow(userId)
                }
                this.props.toggleFollowingProgress(false, userId)
            })
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
    setTotalUsersCount,
    setCurrentPage,
    setIsFetching,
    toggleFollowingProgress
})(UsersContainer)
