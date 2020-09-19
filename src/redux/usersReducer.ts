const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW"

export type locationType = {
    country: string
    city: string
}

export type usersType = {
    id: number,
    name: string
    surName: string
    photoUrl: string
    isFollowed: boolean
    description: string
    location: locationType
}

export type initialUsersStateType = {
    users: Array<usersType>
}

export type ActionsUsersTypes =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>

const initialState: initialUsersStateType =
    {
        users: [
            {
                id: 1,
                name: 'Yura',
                surName: 'Sczegliuk',
                photoUrl: 'https://avatars0.githubusercontent.com/u/32770315?s=460&u=5085bc60e02c9b325b519194d493a3fb298b6e60&v=4',
                isFollowed: true,
                description: 'I love in Cs and music',
                location: {
                    country: 'Belarus',
                    city: 'Minsk'
                }
            },
            {
                id: 2,
                name: 'Yura',
                surName: 'Sczegliuk',
                photoUrl: 'https://avatars0.githubusercontent.com/u/32770315?s=460&u=5085bc60e02c9b325b519194d493a3fb298b6e60&v=4',
                isFollowed: true,
                description: 'I love in Cs and music',
                location: {
                    country: 'Belarus',
                    city: 'Minsk'
                }
            },
            {
                id: 3,
                name: 'Yura',
                surName: 'Sczegliuk',
                photoUrl: 'https://avatars0.githubusercontent.com/u/32770315?s=460&u=5085bc60e02c9b325b519194d493a3fb298b6e60&v=4',
                isFollowed: true,
                description: 'I love in Cs and music',
                location: {
                    country: 'Belarus',
                    city: 'Minsk'
                }
            },
        ]
    }

const usersReducer = (state = initialState, action: any): initialUsersStateType => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                   if(u.id === action.userId){
                       return {...u, isFollowed: true}
                   }
                   return u;
                })
            }
        }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if(u.id === action.userId){
                        return {...u, isFollowed: false}
                    }
                    return u;
                })
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


export default usersReducer;
