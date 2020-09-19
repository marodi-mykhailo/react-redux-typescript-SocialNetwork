import React from "react";
import {initialUsersStateType, usersType} from "../../redux/usersReducer";
import {AppStateType} from "../../redux/redux-store";


type UsersPropsType = {
    userData: initialUsersStateType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
}


const Users = (props: UsersPropsType) => {
    return (
        <div>
            <header>
                <h1>Users</h1>
            </header>
            <div>
                {props.userData.users.map(u => {
                    return (
                        <div key={u.id}>
                            <div>
                                <img src={u.photoUrl}/>
                                <div>
                                    {u.isFollowed
                                        ? <button onClick={() => {
                                            props.unFollow(u.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
                                            props.follow(u.id)
                                        }}>Follow</button>}
                                </div>
                            </div>
                            <div>
                                <h3>{`${u.name} ${u.surName}`}</h3>
                                <p>{u.description}</p>
                            </div>
                            <div>
                                <span>{u.location.country},</span>
                                <span>{u.location.city}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}
export default Users;
