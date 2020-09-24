const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

// export type locationType = {
//     country: string
//     city: string
// }

export type photosType = {
    small: string | undefined
    large: string | undefined
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
    pageSize: number
    totalUsersCount: number
    currentPage: number
}

export type ActionsUsersTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof setCurrentPageAC>

let initialState: initialUsersStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1
};

const usersReducer = (state: initialUsersStateType = initialState, action: ActionsUsersTypes): initialUsersStateType => {
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
                users: [...action.usersData.items]
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUserCount
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
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

export const setTotalUsersCountAC = (totalUserCount: number) => ({
        type: SET_TOTAL_USERS_COUNT,
        totalUserCount
    } as const
)

export const setCurrentPageAC = (currentPage: number) => ({
    type:SET_CURRENT_PAGE,
    currentPage
} as const)

export default usersReducer;
