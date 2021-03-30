import { QueryFunction } from './types'
import axios, { AxiosResponse } from 'axios'
import { getUrl } from './api.utils'

interface Params {
    email: string
    password: string
}

interface Response {
    accessToken: string
    authentication: {
        strategy: 'local'
    }
    user: {
        _id: string
        email: string
    }
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
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        )

        return getJwtResponse
    },
    queryKey: 'loginAPI',
}

export const registerAPI: QueryFunction<Params, Response> = {
    query: async ({ email, password }) => {
        const createUserResponse = await axios.post(
            getUrl('/users'),
            {
                email,
                password,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            },
        )
        const getJwtResponse = await loginAPI.query({ email, password })

        return getJwtResponse
    },
    queryKey: 'registerAPI',
}
