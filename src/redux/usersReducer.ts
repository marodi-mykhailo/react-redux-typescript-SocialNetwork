const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"

// export type locationType = {
//     country: string
//     city: string
// }

export type photosType = {
    small:  string | undefined
    large:  string | undefined
}

export type usersType = {
    name: string
    id: number,
    uniqueUrlName: string | null
    photos: photosType
    status: string | null
    followed: boolean
}

export type initialUsersStateType = {
    users: Array<usersType>
}

export type ActionsUsersTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>

let initialState: initialUsersStateType = {
    users: []
};

const usersReducer = (state:initialUsersStateType = initialState, action: ActionsUsersTypes): initialUsersStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.usersData.items]
            }
        default:
            return state
    }
}

export const followAC = (userId: number) => ({
        type: FOLLOW,
        userId
    } as const
)

export const unFollowAC = (userId: number) => ({
        type: UNFOLLOW,
        userId
    } as const
)

export const setUsersAC = (usersData: any) => ({
        type: SET_USERS,
        usersData
    } as const
)

export default usersReducer;
