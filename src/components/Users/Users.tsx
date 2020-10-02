import React from "react";
import styles from "./Users.module.css";
import {usersType} from "../../redux/usersReducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: Array<usersType>
    currentPage: number
    pageSize: number
    totalUsersCount: number
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    onPageChange: (currentPage: number) => void
    followingInProgress: Array<any>
}

const Users = (props: UsersPropsType) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pageCountArr = [];
    for (let i = 1; i <= pageCount; i++) {
        pageCountArr.push(i)
    }
    return (
        <div className={styles.wrapper}>
            <header>
                <h1>Users</h1>
            </header>
            {pageCountArr.map(i => <span key={i}
                                         className={(props.currentPage === i) ? `${styles.active} + ${styles.pageCount}` : styles.pageCount}
                                         onClick={() => props.onPageChange(i)}>{i}</span>)}
            <div>
                {props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                <img
                                    src={u.photos.small || 'data:image/jpeg;base64,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'} alt={''}/>
                                </NavLink>
                                <div>

                                    {u.followed
                                        ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                            props.unFollow(u.id)
                                        }}>Unfollow</button>
                                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                            props.follow(u.id)
                                        }}>Follow</button>}
                                </div>
                            </div>
                            <div>
                                <h3>{`${u.name}`}</h3>
                                <p>{u.status}</p>
                            </div>
                            <div>

                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}


export default Users;
