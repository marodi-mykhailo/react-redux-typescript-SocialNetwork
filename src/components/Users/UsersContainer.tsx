import React from "react";
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage,
    setIsFetching,
    setTotalUsersCount,
    setUsers,
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
       usersApi.onFollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.follow(userId)
                }
            })
    }

    onUnFollow = (userId: number) => {
        usersApi.onUnFollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    this.props.unFollow(userId)
                }
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
        isFetching: state.usersPage.isFetching
    }
}

export default connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setTotalUsersCount,
    setCurrentPage,
    setIsFetching,
})(UsersContainer)
