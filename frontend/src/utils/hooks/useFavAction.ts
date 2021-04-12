import { useAtom } from 'jotai'
import { useCallback, useMemo } from 'react'
import { useMutation } from 'react-query'
import { useToasts } from 'react-toast-notifications'
import { newsToFavApi } from '../../api/users.api'
import { userAtom } from '../../state'
import { FavUtil } from '../FavUtil'

export const useFavAction = (newsId: string) => {
    const { addToast } = useToasts()
    const [{ favourites = [] }, setUserAtom] = useAtom(userAtom)
    const hasAddedToFav = FavUtil.hasAddedToFav(favourites, newsId)
    const { mutateAsync, status } = useMutation(() =>
        newsToFavApi.query({ newsId: newsId, isAdded: hasAddedToFav }),
    )

    const addOrRemoveFav = useCallback(async () => {
        try {
            await mutateAsync()
            setUserAtom((prev) => ({
                ...prev,
                favourites: hasAddedToFav
                    ? FavUtil.removeFromFavList(prev.favourites, newsId)
                    : FavUtil.addToFavList(prev.favourites, newsId),
            }))
        } catch (e) {
            addToast('Something has happened, please try again later')
        }
    }, [addToast, hasAddedToFav, mutateAsync, newsId, setUserAtom])

    const result = useMemo(() => ({ status, addOrRemoveFav, hasAddedToFav }), [
        addOrRemoveFav,
        hasAddedToFav,
        status,
    ])

    return result
}
