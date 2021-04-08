import { Auth } from '../utils/Auth'

const obj2QueryString = (initialObj: any) => {
    const reducer = (obj: any, parentPrefix = null) => (
        prev: any,
        key: any,
    ) => {
        const val = obj[key]
        key = encodeURIComponent(key)
        const prefix = parentPrefix ? `${parentPrefix}[${key}]` : key

        if (val == null || typeof val === 'function') {
            prev.push(`${prefix}=`)
            return prev
        }

        if (['number', 'boolean', 'string'].includes(typeof val)) {
            prev.push(`${prefix}=${encodeURIComponent(val)}`)
            return prev
        }

        prev.push(Object.keys(val).reduce(reducer(val, prefix), []).join('&'))
        return prev
    }

    const result = Object.keys(initialObj)
        .reduce(reducer(initialObj), [])
        .join('&')

    return result ? `?${result}` : ''
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
