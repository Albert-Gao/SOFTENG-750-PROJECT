import axios from 'axios'
import { Auth } from '../utils/Auth'
import { SVG_SRC_MAP } from '../utils/getAvatarSVG'
import { User } from '../utils/types'
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
    User
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

export const changeUserAvatarApi: QueryFunction<
    { newAvatar: keyof typeof SVG_SRC_MAP },
    User
> = {
    query: async ({ newAvatar }) => {
        const userId = Auth.getUserInfo()._id

        const getJwtResponse = await axios.patch(
            getUrl(`/users/${userId}`),
            {
                avatar: newAvatar,
            },
            {
                headers: getHeaders(),
            },
        )
        return getJwtResponse.data
    },
    queryKey: 'changeUserAvatarApi',
}

export const changeUserInfoApi: QueryFunction<Partial<User>, User> = {
    query: async (updatedInfo) => {
        const userId = Auth.getUserInfo()._id

        const getJwtResponse = await axios.patch(
            getUrl(`/users/${userId}`),
            updatedInfo,
            {
                headers: getHeaders(),
            },
        )
        return getJwtResponse.data
    },
    queryKey: 'changeUserInfoApi',
}

export const getOtherUserInfoApi: QueryFunction<{ userId: string }, User> = {
    query: async ({ userId }) => {
        const getJwtResponse = await axios.get(
            getUrl(`/users/${userId}`, { $populate: ['favourites'] }),
            {
                headers: getHeaders(),
            },
        )
        return getJwtResponse.data
    },
    queryKey: 'getOtherUserInfoApi',
}
