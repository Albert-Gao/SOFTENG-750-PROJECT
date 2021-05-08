import { QueryFunction } from './types'
import axios from 'axios'
import { getHeaders, getUrl } from './api.utils'
import { User } from '../utils/types'

interface Params {
    email: string
    password: string
}

interface Response {
    accessToken: string
    authentication: {
        strategy: string
    }
    user: User
}

export const loginAPI: QueryFunction<Params, Response> = {
    query: async ({ email, password }) => {
        const getJwtResponse = await axios.post(
            getUrl('/authentication'),
            {
                strategy: 'local',
                email,
                password,
            },
            {
                headers: getHeaders({ isAuth: false }),
            },
        )

        return getJwtResponse.data
    },
    queryKey: 'loginAPI',
}

export const registerAPI: QueryFunction<Params, Response> = {
    query: async ({ email, password }) => {
        await axios.post(
            getUrl('/users'),
            {
                email,
                password,
            },
            {
                headers: getHeaders({ isAuth: false }),
            },
        )
        const getJwtResponse = await loginAPI.query({ email, password })

        return getJwtResponse
    },
    queryKey: 'registerAPI',
}
