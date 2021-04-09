import { PaginationQuery, QueryFunction } from './types'
import axios from 'axios'
import { getHeaders, getUrl } from './api.utils'
import { NewsComment } from '../utils/types'

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

        return getJwtResponse
    },
    queryKey: 'createCommentAPI',
}

export const getCommentsAPI: QueryFunction<
    {
        skipped: number
        limit?: number
    },
    PaginationQuery<NewsComment>
> = {
    query: async ({ limit = 15, skipped }) => {
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
            }),
        )
        return getJwtResponse
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
        return getJwtResponse
    },
    queryKey: 'getSingleCommentAPI',
}
