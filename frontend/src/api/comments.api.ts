import { PaginationQuery, QueryFunction } from './types'
import axios from 'axios'
import { getHeaders, getUrl } from './api.utils'
import { NewsComment } from '../utils/types'
import { Auth } from '../utils/Auth'

export const createCommentAPI: QueryFunction<
    {
        authorId: string
        newsId: string
        text: string
    },
    NewsComment
> = {
    query: async ({ authorId, newsId, text }) => {
        const getJwtResponse = await axios.post(
            getUrl('/comments'),
            {
                author: authorId,
                news: newsId,
                text,
            },
            {
                headers: getHeaders(),
            },
        )

        return getJwtResponse.data
    },
    queryKey: 'createCommentAPI',
}

export const getCommentsAPI: QueryFunction<
    {
        skipped: number
        limit?: number
        newsId: string
    },
    PaginationQuery<NewsComment>
> = {
    query: async ({ newsId, limit = 15, skipped }) => {
        let skipCount = skipped
        if (skipped > 0) {
            skipCount = skipped + 15
        }

        const getJwtResponse = await axios.get(
            getUrl('/comments', {
                $skip: skipCount,
                $limit: limit,
                $populate: 'author',
                $sort: {
                    createdAt: -1,
                },
                news: newsId,
            }),
        )
        return getJwtResponse.data
    },
    queryKey: 'getCommentsAPI',
}

export const getSingleCommentAPI: QueryFunction<{ id: string }, NewsComment> = {
    query: async ({ id }) => {
        const getJwtResponse = await axios.get(
            getUrl(`/comments/${id}`, {
                $populate: 'author',
            }),
        )
        return getJwtResponse.data
    },
    queryKey: 'getSingleCommentAPI',
}

export const getCurrentUserCommentsAPI: QueryFunction<
    {
        skipped: number
        limit?: number
    },
    PaginationQuery<NewsComment>
> = {
    query: async ({ limit = 60, skipped }) => {
        const userId = Auth.getUserInfo()._id
        let skipCount = skipped
        if (skipped > 0) {
            skipCount = skipped + 15
        }

        const getJwtResponse = await axios.get(
            getUrl('/comments', {
                $skip: skipCount,
                $limit: limit,
                $populate: 'author',
                $sort: {
                    createdAt: -1,
                },
                author: userId,
            }),
        )
        return getJwtResponse.data
    },
    queryKey: 'getCurrentUserCommentsAPI',
}
