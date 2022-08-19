import * as axios from 'axios';    
const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "8408e9dc-244e-4bf7-8c81-0ed9af50d5b1"
    }

})
export const usersAPI = {
    getUsers (currentPage=1, pageSize=10 ) { 
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then ((response) => response.data)
    },
    follow(userID){
        return instance.post(`follow/${userID}`)
        .then ((response) => response.data)
    },
    unfollow(userID){
        return instance.delete(`follow/${userID}`)
        .then ((response) => response.data)
    }
}

export const profileAPI = {
    getProfile (userId) {
        return instance.get (`profile/${userId}`)
        .then ((response) => response.data);
    }
}

export const authAPI = {
    me () {
        return instance.get (`auth/me`)
        .then ((response) => response.data);
    }
}
