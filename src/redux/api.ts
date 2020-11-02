import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {'API-KEY': '1a3237fe-e721-4f8c-aaca-8ad848347a2d'}
})

export const instance2 = axios.create({
    baseURL: 'http://localhost:5000/api/',
    headers: {"Access-Control-Allow-Origin": "*"}
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
    },

}

export const profileAPI = {
    getProfile: (userId: string) => {
        return instance.get(`profile/${userId}`)
    },
    getStatus: (userId: number) => {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus: (status: string) => {
        return instance.put(`profile/status/`, {status})
    }
}

export const authAPI = {
    me() {
        return instance.get('auth/me')
    },
    login: (email: string, password: string, rememberMe: boolean) => {
        return instance.post('auth/login', {email, password, rememberMe})
    },
    logOut: () => {
        return instance.delete('auth/login')
    }
}

export const authAPI2 ={
    register: (username: string, email: string, password: string) => {
        return instance2.post('auth/register', {username, email, password})
    }
}


