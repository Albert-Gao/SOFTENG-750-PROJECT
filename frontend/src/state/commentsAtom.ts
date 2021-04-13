import { atom } from 'jotai'

export const commentsAtom = atom<{
    news: {
        [newsId: string]: {
            total: number
            skipped: number
            shouldUpdateCommentsList: boolean
        }
    }
}>({
    news: {},
})
