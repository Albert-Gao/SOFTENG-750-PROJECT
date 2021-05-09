import { useAtom } from 'jotai'
import { useCallback } from 'react'
import { commentsAtom } from '../../state/commentsAtom'

export const useUpdateComments = (newsId: string) => {
    const [{ news }, setCommentsAtom] = useAtom(commentsAtom)
    const commentsInfo = news[newsId] ?? {
        skipped: 0,
        total: 0,
        shouldUpdateCommentsList: false,
    }

    const toggleUpdateComments = useCallback(() => {
        setCommentsAtom((v) => ({
            news: {
                ...v.news,
                [newsId]: {
                    skipped: v.news[newsId].skipped,
                    total: v.news[newsId].total,
                    shouldUpdateCommentsList: false,
                },
            },
        }))
    }, [newsId, setCommentsAtom])

    return {
        setCommentsAtom,
        commentsInfo,
        shouldUpdateCommentsList: commentsInfo.shouldUpdateCommentsList,
        toggleUpdateComments,
    }
}
