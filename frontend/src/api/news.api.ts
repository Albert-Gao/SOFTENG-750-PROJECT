import { PaginationQuery, QueryFunction } from './types'
import axios from 'axios'
import { getHeaders, getUrl } from './api.utils'
import { News } from '../utils/types'

interface CreateNewsAPIParams {
    wikipediaUrl: string
    authorWords?: string
}

export const createNewsAPI: QueryFunction<CreateNewsAPIParams, News> = {
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

interface GetNewsAPIParams {
    skipped: number
    limit?: number
}

export const getNewsAPI: QueryFunction<
    GetNewsAPIParams,
    PaginationQuery<News>
> = {
    query: async ({ limit = 15, skipped }) => {
        let skipCount = skipped
        if (skipped > 0) {
            skipCount = skipped + 15
        }

        const getJwtResponse = await axios.get(
            getUrl('/news', {
                $skip: skipCount,
                $limit: limit,
                $populate: 'author',
                $sort: {
                    createdAt: -1,
                },
            }),
        )
        return getJwtResponse
    },
    queryKey: 'getNewsAPI',
}
