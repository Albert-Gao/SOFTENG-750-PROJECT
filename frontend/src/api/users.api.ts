import axios from 'axios'
import { Auth } from '../utils/Auth'
import { News, User } from '../utils/types'
import { getUrl, getHeaders } from './api.utils'
import { QueryFunction } from './types'

export const getUserInfoApi: QueryFunction<
    any,
    { user: User; accessToken: string }
> = {
    query: async () => {
        const accessToken = Auth.getAuthToken()

        const getJwtResponse = await axios.post(
            getUrl(`/authentication`),
            {
                strategy: 'jwt',
                accessToken,
            },
            {
                headers: getHeaders(),
            },
        )
        return getJwtResponse.data
    },
    queryKey: 'getUserInfoApi',
}

export const newsToFavApi: QueryFunction<
    { newsId: string; isAdded: boolean },
    News
> = {
    query: async ({ isAdded, newsId }) => {
        const userId = Auth.getUserInfo()._id

        const getJwtResponse = await axios.patch(
            getUrl(`/users/${userId}`),
            {
                [isAdded ? '$pull' : '$addToSet']: { favourites: newsId },
            },
            {
                headers: getHeaders(),
            },
        )
        return getJwtResponse.data
    },
    queryKey: 'newsToFavApi',
}
