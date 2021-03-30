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
}

export const Auth = {
    saveAuth,
    getAuthToken,
    isAuth,
    logout,
}
