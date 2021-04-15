import { PaginationQuery, QueryFunction } from './types'
import axios from 'axios'
import { getHeaders, getUrl } from './api.utils'
import { News } from '../utils/types'
import { Auth } from '../utils/Auth'

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

        return getJwtResponse.data
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
                $populate: ['author', 'votingRecords'],
                $sort: {
                    createdAt: -1,
                },
            }),
        )
        return getJwtResponse.data
    },
    queryKey: 'getNewsAPI',
}

export const getSingleNewsAPI: QueryFunction<{ id: string }, News> = {
    query: async ({ id }) => {
        const getJwtResponse = await axios.get(
            getUrl(`/news/${id}`, {
                $populate: ['author', 'votingRecords'],
            }),
        )
        return getJwtResponse.data
    },
    queryKey: 'getSingleNewsAPI',
}

export const voteNewsApi: QueryFunction<
    { newsId: string; userId: string; isVoted: boolean },
    News
> = {
    query: async ({ isVoted, newsId, userId }) => {
        const getJwtResponse = await axios.patch(
            getUrl(`/news/${newsId}`),
            {
                [isVoted ? '$pull' : '$addToSet']: { votingRecords: userId },
            },
            {
                headers: getHeaders(),
            },
        )
        return getJwtResponse.data
    },
    queryKey: 'voteNewsApi',
}

export const getFavNewsApi: QueryFunction<{ userId?: string }, News[]> = {
    query: async ({ userId = Auth.getUserInfo()._id }) => {
        const getJwtResponse = await axios.get(
            getUrl(`/users/${userId}`, {
                $populate: ['favourites', 'favourites.author'],
            }),
            {
                headers: getHeaders(),
            },
        )
        return getJwtResponse.data.favourites
    },
    queryKey: 'getFavNewsApi',
}

export const getCurrentUserSubmittedNewsAPI: QueryFunction<
    { userId?: string } & GetNewsAPIParams,
    PaginationQuery<News>
> = {
    query: async ({ userId = Auth.getUserInfo()._id, limit = 50, skipped }) => {
        let skipCount = skipped
        if (skipped > 0) {
            skipCount = skipped + 15
        }

        const getJwtResponse = await axios.get(
            getUrl('/news', {
                $skip: skipCount,
                $limit: limit,
                $populate: ['author', 'votingRecords'],
                $sort: {
                    createdAt: -1,
                },
                author: userId,
            }),
        )
        return getJwtResponse.data
    },
    queryKey: 'getCurrentUserSubmittedNewsAPI',
}
