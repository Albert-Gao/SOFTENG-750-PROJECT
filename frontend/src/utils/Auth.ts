import { User } from './types'

function saveAuth(accessToken: string) {
    window.localStorage.setItem('accessToken', accessToken)
}

function getAuthToken() {
    return window.localStorage.getItem('accessToken') ?? ''
}

function isAuth() {
    const accessToken = getAuthToken()
    return !!accessToken
}

function logout() {
    window.localStorage.setItem('accessToken', '')
    window.localStorage.setItem('user', '')
}

function saveUserInfo(user: User) {
    let userInfo = user
    if (!('privacy' in userInfo)) {
        userInfo = {
            ...userInfo,
            privacy: {
                shouldShowEmail: true,
                shouldShowFavouritePage: true,
                shouldShowSubmittedNews: true,
            },
        }
    }
    window.localStorage.setItem('user', JSON.stringify(user))
}
function getUserInfo(): User {
    return JSON.parse(window.localStorage.getItem('user') ?? '{}')
}
function deleteUserInfo() {
    window.localStorage.setItem('user', '')
}

export const Auth = {
    saveUserInfo,
    getUserInfo,
    deleteUserInfo,
    saveAuth,
    getAuthToken,
    isAuth,
    logout,
}
