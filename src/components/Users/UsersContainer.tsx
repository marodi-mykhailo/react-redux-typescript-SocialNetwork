import React from "react";
import {connect} from "react-redux";
import {
    follow, followThunkAC, requestUsers, setCurrentPage,
    setUsers, toggleFollowingProgress,
    unFollow, unFollowThunkAC,
    usersType
} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";
import Users from "./Users";
import Preloader from "../../common/Preloader";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux"
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";

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
    isAuth: boolean
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
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
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

// const mapStateToProps = (state: AppStateType) => {
//     return {
//         users: state.usersPage.users,
//         currentPage: state.usersPage.currentPage,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress,
//     }
// }

const mapStateToProps = (state: AppStateType) => {
    return {
        users: getUsers(state),
        currentPage: getCurrentPage(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unFollow,
        setUsers,
        getUsers: requestUsers,
        setCurrentPage,
        followThunkAC,
        unFollowThunkAC,
        toggleFollowingProgress
    })
)(UsersContainer)

