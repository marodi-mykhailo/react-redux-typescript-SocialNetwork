import React from "react";
import {initialUsersStateType} from "../../redux/usersReducer";
import axios from 'axios/index';


type UsersPropsType = {
    userData: initialUsersStateType
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (usersData: any) => void
}


const Users = (props: UsersPropsType) => {
if(props.userData.users.length === 0){
    axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsers(response.data)
    })
}
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
                                <img src={u.photos.small}/>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => {
                                            props.unFollow(u.id)
                                        }}>Unfollow</button>
                                        : <button onClick={() => {
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
                <button onClick={()=>{}}>More Users</button>
            </div>
        </div>

    )
}
export default Users;
