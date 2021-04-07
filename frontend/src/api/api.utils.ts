import { Auth } from '../utils/Auth'

function obj2QueryString(obj: any) {
    const str = []
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]))
        }
    }

    return `${str.length > 0 ? '?' : ''}${str.join('&')}`
}

export const getUrl = (pathName: string, queryParams: object = {}) =>
    `${
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3030'
            : process.env.REACT_APP_SERVER_URL
    }${pathName}${obj2QueryString(queryParams)}`

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
