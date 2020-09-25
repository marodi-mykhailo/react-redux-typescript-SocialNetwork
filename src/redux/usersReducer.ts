const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET-USERS"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_USER_IS_FETCHING = "SET_USER_IS_FETCHING"

// export type locationType = {
//     country: string
//     city: string
// }

export type PhotosType = {
    small: string | undefined
    large: string | undefined
}

export type usersType = {
    name: string
    id: number,
    uniqueUrlName: string | null
    photos: PhotosType
    status: string | null
    followed: boolean
}

export type initialUsersStateType = {
    users: Array<usersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type ActionsUsersTypes =
    ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setIsFetching>

let initialState: initialUsersStateType = {
    users: [],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
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
        case "SET_USER_IS_FETCHING":
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const follow = (userId: number) => ({
        type: FOLLOW,
        userId
    } as const
)

export const unFollow = (userId: number) => ({
        type: UNFOLLOW,
        userId
    } as const
)

export const setUsers = (usersData: any) => ({
        type: SET_USERS,
        usersData
    } as const
)

export const setTotalUsersCount = (totalUserCount: number) => ({
        type: SET_TOTAL_USERS_COUNT,
        totalUserCount
    } as const
)

export const setCurrentPage = (currentPage: number) => ({
        type: SET_CURRENT_PAGE,
        currentPage
    } as const
)

export const setIsFetching = (isFetching: boolean) => ({
        type: SET_USER_IS_FETCHING,
        isFetching
    } as const
)

export default usersReducer;
