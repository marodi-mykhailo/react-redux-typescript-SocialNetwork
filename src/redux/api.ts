import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '1a3237fe-e721-4f8c-aaca-8ad848347a2d'}
})

export const usersApi = {
    getUsers: (currentPage: number, pageSize: number) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
    },
    onFollow: (userId: number) => {
        return instance.post(`follow/${userId}`)
    },
    onUnFollow: (userId: number) => {
        return instance.delete(`follow/${userId}`)
    }
}

export const headerAPI = {
    getUserData: () =>{
        return instance.get('auth/me')
    }
}

export const profileAPI = {
    getUserProfile: (userId:string) => {
        return instance.get(`profile/${userId}`)
    }
}
