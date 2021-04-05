import { QueryFunction } from './types'
import axios from 'axios'
import { getHeaders, getUrl } from './api.utils'
import { News } from '../utils/types'

interface Params {
    wikipediaUrl: string
    authorWords?: string
}

export const createNewsAPI: QueryFunction<Params, News> = {
    query: async ({ wikipediaUrl, authorWords }) => {
        const getJwtResponse = await axios.post(
            getUrl('/news'),
            {
                wikipediaUrl,
                authorWords,
            },
            {
                headers: getHeaders(),
            },
        )

        return getJwtResponse
    },
    queryKey: 'createNewsAPI',
}

export const getNewsAPI: QueryFunction<Params, News> = {
    query: async ({ wikipediaUrl }) => {
        const getJwtResponse = await axios.get(getUrl('/news'))
        return getJwtResponse
    },
    queryKey: 'getNewsAPI',
}
