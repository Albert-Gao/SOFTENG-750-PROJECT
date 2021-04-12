export const FavUtil = {
    hasAddedToFav: (favList: string[], newsId: string) =>
        !!favList.find((favNewsId) => favNewsId === newsId),

    removeFromFavList: (favList: string[], newsId: string) =>
        favList.filter((favId) => favId !== newsId),

    addToFavList: (favList: string[] = [], newsId: string) =>
        favList.concat([newsId]),
}
