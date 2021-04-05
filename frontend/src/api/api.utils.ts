import { Auth } from '../utils/Auth'

export const getUrl = (url: string) =>
    `${
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3030'
            : process.env.REACT_APP_SERVER_URL
    }${url}`

export const getHeaders = ({ isAuth = true }: { isAuth?: boolean } = {}) => {
    const headers: {
        'Content-Type': 'application/json'
        Authorization?: string
    } = {
        'Content-Type': 'application/json',
    }

    if (!isAuth) {
        return headers
    }

    headers['Authorization'] = `Bearer ${Auth.getAuthToken()}`

    return headers
}
